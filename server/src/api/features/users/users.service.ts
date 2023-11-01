import mongoose from "mongoose";
import {
  TUser,
  User,
  TUserFilterQuery,
  TUserProjectionType,
  TUserQueryOptions,
} from "../../../db/models/user.model";

class UsersService {
  async create(create: Partial<TUser & { _id: mongoose.Types.ObjectId }>) {
    const document = await User.create(create);
    const user = await this.findUserById(document.id);
    return user;
  }

  async findOne(filter: TUserFilterQuery) {
    const result = await User.findOne(filter);
    return result;
  }

  async findAll(filter: TUserFilterQuery) {
    const results = await User.find(filter);
    return results;
  }

  async update(id: string, update: Partial<TUser>) {
    const result = await User.updateOne({ _id: id }, update);
    return result;
  }

  async findUserByUsername(username: string) {
    const user = await User.findOne({ username });
    return user;
  }

  async findUserById(id: string) {
    const user = await User.findOne({ _id: id });
    return user;
  }

  async findUserByEmail(email: string) {
    const user = await User.findOne({ email });
    return user;
  }

  async findUserProfileByUsername(username: string) {
    const user = await User.findOne({ username });
    /**
     * 1.
     * Get user's posts.
     * Get the number of content media (images and video) in those posts.
     *
     * 2.
     * Get user's subscriptionPlan.
     *
     * 3.
     * Get user's reviews.
     */

    return user;
  }

  async findUserProfileMediaByUserId(userId: string) {}
}

export const usersService = new UsersService();
