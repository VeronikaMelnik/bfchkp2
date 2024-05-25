import { BaseEntity } from './global.interface';
import { IFile } from './image.interface';

export interface IUserShort {
  id: number;
  email: string;
  password?: string;
}

export interface IUser extends IUserShort {
  person: IPerson;
}

export interface IParent {}

export interface IPerson extends BaseEntity {
  name: string;
  lastName: string;
  image: IFile;
}
