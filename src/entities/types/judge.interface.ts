import { BaseEntity } from './global.interface';
import { IPerson } from './user.interface';

export interface IJudgeShort extends BaseEntity {
  personId: number;
}

export interface IJudge extends IJudgeShort {
  person: IPerson;
}
