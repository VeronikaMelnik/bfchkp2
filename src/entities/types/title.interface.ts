import { BaseEntity } from './global.interface';
import { IMember } from './member.interface';
import { IResult } from './result.interface';

export interface ITitleShort extends BaseEntity {
  name: string;
  resultId: number;
  memberId: number;
}

export interface ITitle extends ITitleShort {
  result: IResult;
  member: IMember;
}
