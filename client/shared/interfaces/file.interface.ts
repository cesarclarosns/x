import IUser from "./user.interface"

export default interface IFile {
  id: string
  type: "image" | "video" | "file"
  name: string
  url: string
  size: number
  createdBy?: IUser
}
