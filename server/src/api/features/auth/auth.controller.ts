import { RequestHandler, Router } from "express";
import { authService } from "./auth.service";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../../../config/config";
import passport from "passport";
import {
  ITokenPayload,
  ITokenPayloadUser,
} from "../../../shared/interfaces/token-payload.interface";

class AuthController {
  router = Router();

  constructor() {
    this.router.post("/sign-in", this.signIn());
    this.router.post("/sign-up", this.signUp());
    this.router.post("/refresh", this.refreshToken());
    this.router.post("/sign-out", this.signOut());
    this.router.get("/verify-email", this.verifyEmail());
    this.router.get("/verify-email/callback", this.verifyEmailCallback());
    this.router.get("/reset-password", this.resetPassword());
    this.router.get("/reset-password/callback", this.resetPasswordCallback());
    // Social
    this.router.get(
      "/google",
      passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
        prompt: "select_account",
      })
    );
    this.router.get(
      "/google/callback",
      passport.authenticate("google", {
        failureRedirect: "http://127.0.0.1:3000",
        session: false,
      }),
      async (req, res, next) => {
        try {
          const user = req.user as ITokenPayloadUser;
          const payload = await authService.generateTokenPayload(user._id);
          const refreshToken = await authService.generateRefreshToken(payload);

          res.cookie("persist", true);
          res.cookie("refreshToken", refreshToken, { httpOnly: true });
          res.redirect("http://127.0.0.1:3000");
        } catch (err) {
          console.log(err);
          next(err);
        }
      }
    );
  }

  signIn(): RequestHandler {
    return async (req, res) => {
      try {
        const { payload, accessToken, refreshToken } = await authService.signIn(
          req.body
        );

        res.cookie("persist", true);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 1 * 60 * 60 * 1000,
        });

        res.send({
          payload,
          accessToken,
        });
      } catch (err) {
        console.log(err);
        res.status(401).send(err);
      }
    };
  }

  signUp(): RequestHandler {
    return async (req, res) => {
      try {
        const { user } = await authService.signUp(req.body);
        res.send({ message: "OK" });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    };
  }

  refreshToken(): RequestHandler {
    return async (req, res) => {
      try {
        console.log("Refreshing token...");
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) throw "Unauthorized";

        const {
          user: { _id: userId },
        } = jsonwebtoken.verify(
          refreshToken,
          config.REFRESH_TOKEN_SECRET
        ) as ITokenPayload;

        const {
          payload,
          accessToken,
          refreshToken: newRefreshToken,
        } = await authService.refreshToken({
          refreshToken,
          userId,
        });

        // Refresh token rotation
        res.cookie("refreshToken", newRefreshToken, {
          httpOnly: true,
          maxAge: config.REFRESH_TOKEN_EXPIRES_IN * 1000,
        });

        res.send({
          payload,
          accessToken,
        });
      } catch (err) {
        console.log(err);
        res.clearCookie("refreshToken");
        res.clearCookie("persist");
        res.status(401).send(err);
      }
    };
  }

  signOut(): RequestHandler {
    return async (req, res) => {
      try {
        res.clearCookie("persist");
        res.clearCookie("refreshToken", { httpOnly: true });

        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) throw "Unauthorized";

        const payload = jsonwebtoken.verify(
          refreshToken,
          config.ACCESS_TOKEN_SECRET
        ) as ITokenPayload;
        const userId = payload.user._id;
        await authService.signOut({
          userId,
          refreshToken,
        });

        res.send({ message: "OK" });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    };
  }

  verifyEmail(): RequestHandler {
    return async (req, res) => {};
  }

  verifyEmailCallback(): RequestHandler {
    return async (req, res) => {};
  }

  resetPassword(): RequestHandler {
    return async (req, res) => {};
  }

  resetPasswordCallback(): RequestHandler {
    return async (req, res) => {};
  }
}

export const authController = new AuthController();
