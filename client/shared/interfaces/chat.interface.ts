import IUser from "./user.interface"

export default interface IChat {
  id: string
  participants: IUser[]
}
