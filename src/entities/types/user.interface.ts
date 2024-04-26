export interface IUserShort {
  id: number;
  name: string;
  lastName: string;
  image: string;

  email: string;
  password: string;
}

export interface IUser extends IUserShort {}

export interface IParent {}
