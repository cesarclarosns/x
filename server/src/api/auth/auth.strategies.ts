import mongoose from "mongoose";
import passport from "passport";
import { Strategy as JWTStrategy } from "passport-jwt";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { config } from "@/config/config";
import { User } from "@/db/models/user.model";
import { authService } from "@/api/auth/auth.service";
import { usersService } from "../users/users.service";

passport.use(
  new JWTStrategy(
    {
      secretOrKey: config.ACCESS_TOKEN_SECRET,
      jwtFromRequest: (req) => {
        return req.headers.authorization?.split(" ")?.[1]!;
      },
    },
    (payload, done) => {
      done(null, payload);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: config.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        let user = await usersService.findOne(
          { googleId: profile.id },
          { password: 0 }
        );
        if (!user) {
          const _id = new mongoose.Types.ObjectId();
          const username = `u${_id.toString()}`;
          const googleId = profile.id;
          const profilePicture = profile.photos?.[0].value;
          const displayName = profile.displayName;

          await User.create({
            _id,
            username,
            googleId,
            displayName,
            ...(profilePicture && { profilePicture }),
          });
          user = await User.findOne({ _id }, { password: 0 });
        }
        const payload = await authService.generateTokenPayload(user!.id);
        return cb(null, payload.user);
      } catch (err) {
        console.log("err:", err);
        return cb(err, null);
      }
    }
  )
);
