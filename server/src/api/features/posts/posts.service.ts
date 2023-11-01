import {
  Post,
  TPost,
  TPostFilterQuery,
  TPostQueryOptions,
} from "@/db/models/post.model";
import { CreateOptions } from "mongoose";

class PostsService {
  async findOne(filter: TPostFilterQuery, options: TPostQueryOptions) {
    const post = await Post.findOne(filter, {}, options);
    return post;
  }

  async findAll(filter: TPostFilterQuery, options: TPostQueryOptions) {
    const posts = await Post.find(filter, {}, options);
    return posts;
  }

  async create(create: Omit<TPost, "createdAt" | "updateAt">) {
    const newPost = await Post.create(create);
    const post = await this.findOneById(newPost.id, {});
    return post;
  }

  async findOneById(id: string, options: TPostQueryOptions) {
    const post = await this.findOne({ _id: id }, options);
    return post;
  }

  async update(id: string, update: Partial<TPost>, options: TPostQueryOptions) {
    const opResult = await Post.updateOne({ _id: id }, update, options);
    const post = await this.findOneById(id, {});
    return post;
  }

  async delete(id: string) {
    const opResult = await Post.updateOne({ _id: id }, { active: false });
    const post = await this.findOneById(id, {});
    return post;
  }
}

export const postsService = new PostsService();
