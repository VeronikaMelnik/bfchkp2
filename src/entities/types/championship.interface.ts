import { BaseEntity } from './global.interface';

export interface IChampionshipShort extends BaseEntity {
  name: string;
  date: Date;
}

export interface IChampionship extends IChampionshipShort {}
