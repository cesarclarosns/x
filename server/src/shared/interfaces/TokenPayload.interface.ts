export interface ITokenPayloadUser {
  _id: string;
  username: string;
}

export interface ITokenPayload {
  user: ITokenPayloadUser;
}
