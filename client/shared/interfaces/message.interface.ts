import IFile from "./file.interface"
import IUser from "./user.interface"

export default interface IMessage {
  id: string
  chatId: string
  senderId?: string
  content?: string
  attachments?: IFile[]

  sender?: IUser
}
