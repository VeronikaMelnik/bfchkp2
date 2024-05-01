import { NewsStatusEnum } from '@shared/constants';
import { SortOrder } from '@shared/types';
import { IDictionary } from './dictionary.interface';
import { BaseEntity } from './global.interface';
import { IFile } from './image.interface';

export interface INews extends BaseEntity {
  title: IDictionary;
  description: IDictionary;
  image: IFile;
  titleId: number;
  descriptionId: number;
  imageId: number;
}

export interface INewsFilter {
  status?: keyof typeof NewsStatusEnum;
}

export type INewsSort = { created_at: SortOrder } | { status: SortOrder };
