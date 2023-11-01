export default interface IUser {
  _id: string
  username: string
  displayName?: string
  profilePicture?: string
  emailVerified?: true
  status?: "online" | "offline" | "away"
  bio?: string

  imagesCount?: number
  videosCount?: number
}
