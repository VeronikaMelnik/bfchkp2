import { BaseEntity } from './global.interface';
import { ITeam } from './team.interface';
import { IPerson } from './user.interface';

export interface ICoachShort extends BaseEntity {
  experience: number;
  personId: number;
  teamId: number;
}

export interface ICoach extends ICoachShort {
  person: IPerson;
  team: ITeam;
}
