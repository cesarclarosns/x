import {
  Chat,
  TChat,
  TChatFilterQuery,
  TChatQueryOptions,
} from "@/db/models/chat.model";
import {
  LastReadMessagePerUser,
  TLastReadMessagePerUser,
} from "@/db/models/last-read-message-per-user.model";
import {
  Message,
  TMessage,
  TMessageFilterQuery,
} from "@/db/models/message.model";
import { CreateOptions } from "mongoose";

class ChatsService {
  async create(create: Partial<TChat>, options: CreateOptions = {}) {
    let chat = await Chat.findOne(
      {
        type: "one-to-one",
        participants: { $all: create.participants },
      },
      options
    );
    if (chat) throw "Chat is already created";

    let newChats = await Chat.create([create], options);
    let newChat = await this.findOneById(newChats[0].id!);
    return newChat;
  }

  async update(id: string, update: Partial<TChat>) {
    const opResult = await Chat.updateOne({ _id: id }, update);
    const chat = await this.findOneById(id);
    return chat;
  }

  async findOne(filter: TChatFilterQuery, options: TChatQueryOptions = {}) {
    const chat = await Chat.findOne(filter, {}, options);
    return chat;
  }

  async findOneById(id: string) {
    const chat = await Chat.findById(id);
    return chat;
  }

  async findAll(filter: TChatFilterQuery) {
    const chats = await Chat.find(filter);
    return chats;
  }

  async findAllMessages(filter: TMessageFilterQuery) {
    const messages = await Message.find(filter);
    return messages;
  }

  async createMessage(create: Partial<TMessage>) {
    const message = await Message.create(create);
    return message;
  }

  async findAllLastReadMessagePerUser({
    chatId,
    userIds,
  }: {
    chatId: string;
    userIds: string[];
  }) {
    const results = await LastReadMessagePerUser.find({
      chatId,
      userId: userIds,
    });
    return results;
  }

  async createLastReadMessagePerUser(create: Partial<TLastReadMessagePerUser>) {
    const lastReadMessagePerUser = await LastReadMessagePerUser.create(create);
    return lastReadMessagePerUser;
  }
}

export const chatsService = new ChatsService();
