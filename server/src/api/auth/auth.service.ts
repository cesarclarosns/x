import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../../config/config";
import { Token } from "../../db/models/token.model";
import { ITokenPayload } from "../../shared/interfaces/TokenPayload.interface";
import { usersService } from "../users/users.service";

class AuthService {
  constructor() {}

  async signIn(credentials: { email: string; password: string }) {
    const response = {
      errors: { email: { message: "" }, password: { message: "" } },
    };
    const user = await usersService.findOne({ email: credentials.email });

    if (!user) {
      response.errors.email.message = "Email not registered";
      throw response;
    }

    if (!(await bcrypt.compare(credentials.password, user.password!))) {
      response.errors.password.message = "Password is invalid";
      throw response;
    }

    const payload = await this.generateTokenPayload(user._id.toString());
    const accessToken = this.generateAccessToken(payload);
    const refreshToken = this.generateRefreshToken(payload);

    return {
      accessToken,
      refreshToken,
      payload,
    };
  }

  async signUp(credentials: {
    email: string;
    username: string;
    password: string;
  }) {
    console.log({ credentials });
    const response = {
      errors: {
        email: { message: "" },
        username: { message: "" },
        password: { message: "" },
      },
    };

    const user = await usersService.findOne({
      $or: [{ email: credentials.email }, { username: credentials.username }],
    });

    if (!user) {
      const hashedPassword = await bcrypt.hash(
        credentials.password,
        config.PASSWORD_SALT
      );

      const user = await usersService.create({
        username: credentials.username,
        email: credentials.email,
        password: hashedPassword,
      });

      return {
        user,
      };
    } else {
      if (user.email === credentials.email)
        response.errors.email.message = "Email is already taken";
      if (user.username === credentials.username)
        response.errors.username.message = "Username is already taken";

      throw response;
    }
  }

  async signOut({
    refreshToken,
    userId,
  }: {
    refreshToken: string;
    userId: string;
  }) {
    await Token.deleteOne({
      token: refreshToken,
      type: "refresh_token",
      userId: new mongoose.Types.ObjectId(userId),
    });
  }

  async refreshToken({
    refreshToken,
    userId,
  }: {
    refreshToken: string;
    userId: string;
  }): Promise<{
    payload: ITokenPayload;
    accessToken: string;
    refreshToken: string;
  }> {
    const deleteResult = await Token.deleteOne({
      token: refreshToken,
      userId: new mongoose.Types.ObjectId(userId),
    });
    console.log({ deleteResult });

    if (deleteResult.deletedCount > 0) {
      const payload = await this.generateTokenPayload(userId);
      const accessToken = await this.generateAccessToken(payload);
      const refreshToken = await this.generateRefreshToken(payload);

      return {
        payload,
        accessToken,
        refreshToken,
      };
    }

    throw "Unauthorized";
  }

  async generateTokenPayload(userId: string): Promise<ITokenPayload> {
    const user = await usersService.findOne(
      {
        _id: new mongoose.Types.ObjectId(userId),
      },
      {
        password: 0,
      }
    );
    const payload: ITokenPayload = {
      user: {
        _id: user!._id.toString(),
        username: user!.username,
      },
    };
    return payload;
  }

  async generateAccessToken(payload: ITokenPayload): Promise<string> {
    const token = jsonwebtoken.sign(payload, config.ACCESS_TOKEN_SECRET, {
      expiresIn: config.ACCESS_TOKEN_EXPIRES_IN,
    });
    return token;
  }

  async generateRefreshToken(payload: ITokenPayload): Promise<string> {
    const token = jsonwebtoken.sign(payload, config.REFRESH_TOKEN_SECRET, {
      expiresIn: config.REFRESH_TOKEN_EXPIRES_IN,
    });

    const userId = new mongoose.Types.ObjectId(payload.user._id);

    await Token.create({
      userId,
      token,
      type: "refresh_token",
      expireAt: Date.now() + config.REFRESH_TOKEN_EXPIRES_IN * 1000,
    });

    return token;
  }

  async generateVerifyEmailToken() {}
  async generatePasswordResetEmailToken() {}
}

export const authService = new AuthService();
