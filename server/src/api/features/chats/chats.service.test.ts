import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { chatsService } from "./chats.service";
import { logger } from "@/libs/logger";
import { usersService } from "../users/users.service";
import { TUser, User } from "@/db/models/user.model";
import { Chat, TChat } from "@/db/models/chat.model";

const setupDatabase = () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());

    const { users } = await seedDatabase();
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
};

const seedDatabase = async () => {
  let usersData: Partial<TUser>[] = [
    { username: "user1", password: "password" },
    { username: "user2", password: "password" },
  ];

  const users = await Promise.all(
    usersData.map(async (userData) => {
      return await User.create(userData);
    })
  );
  let user1Id = users[0]._id.toString();
  let user2Id = users[1]._id.toString();
  // console.log({ users, user1Id, user2Id });

  // let user1 = await User.findOne({ _id: new mongoose.Types.ObjectId(user1Id) });
  // console.log({ user1 });
  // let user2 = await User.findOne({ id: users[1]._id.toString() });
  // console.log({ user1, user2 });

  let newChat = await Chat.create({
    type: "one-to-one",
    participants: [user1Id, user2Id],
  });

  console.log({ newChat });

  let chat = await Chat.findOne({
    type: "one-to-one",
    participants: { $all: [user1Id, user2Id] },
  });
  console.log({ chat });

  return { users };
};

describe("ChatsService", () => {
  setupDatabase();

  describe("create", () => {
    it("Should create a Chat", async () => {
      const user = await usersService.findOne({});
      const message = await chatsService.create({
        type: "one-to-one",
        participants: [user?.id],
      });

      expect(message).toBeDefined();
    });
  });

  describe("findOne", () => {});

  describe("findAll", () => {});

  describe("findAllMessages", () => {});

  describe("createMessage", () => {});
});
