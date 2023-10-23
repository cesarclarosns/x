import {
  TUser,
  User,
  TUserFilterQuery,
  TUserProjectionType,
  TUserQueryOptions,
} from "../../db/models/user.model";

class UsersService {
  async create(create: Partial<TUser>) {
    const user = await User.create(create);
    return user;
  }
  async findOne(
    filter: TUserFilterQuery = {},
    projection: TUserProjectionType = {},
    options: TUserQueryOptions = {}
  ) {
    const user = await User.findOne(filter, projection, options);
    return user;
  }
  async findAll(
    filter: TUserFilterQuery = {},
    projection: TUserProjectionType = {},
    options: TUserQueryOptions = {}
  ) {
    const users = await User.find(filter, projection, options);
    return users;
  }
  async update(
    filter: TUserFilterQuery,
    update: Partial<TUser>,
    options: TUserQueryOptions = {}
  ) {
    const user = await User.updateOne(filter, update, options);
  }
}

export const usersService = new UsersService();
