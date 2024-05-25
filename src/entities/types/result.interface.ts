import { IChampionship } from './championship.interface';
import { BaseEntity } from './global.interface';
import { IMember } from './member.interface';

export interface IResultShort extends BaseEntity {
  place: number;
  championshipId: number;
  memberId: number;
}

export interface IResult extends IResultShort {
  championship: IChampionship;
  member: IMember;
}
