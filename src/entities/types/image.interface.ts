import { BaseEntity } from './global.interface';

export interface IFile extends BaseEntity {
  filePath: string;
  url: string;
}
