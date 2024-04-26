import { IUser } from './';

export interface IRegistrationResponse extends IUser {
  token: string;
}
