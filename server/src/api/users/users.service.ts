import {
  TUser,
  User,
  UserFilterQuery,
  UserProjectionType,
  UserQueryOptions,
} from "../../db/models/user.model";

class UsersService {
  async create(create: Partial<TUser>) {
    const user = await User.create(create);
    return user;
  }
  async findOne(
    filter: UserFilterQuery = {},
    projection: UserProjectionType = {},
    options: UserQueryOptions = {}
  ) {
    const user = await User.findOne(filter, projection, options);
    return user;
  }
  async findAll(
    filter: UserFilterQuery = {},
    projection: UserProjectionType = {},
    options: UserQueryOptions = {}
  ) {
    const users = await User.find(filter, projection, options);
    return users;
  }
  async update(
    filter: UserFilterQuery,
    update: Partial<TUser>,
    options: UserQueryOptions = {}
  ) {
    const user = await User.updateOne(filter, update, options);
  }
}

export const usersService = new UsersService();
