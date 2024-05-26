import { BaseEntity } from './global.interface';
import { ITeam } from './team.interface';
import { IPerson } from './user.interface';

export interface IMemberShort extends BaseEntity {
  personId: number | undefined;
  teamId: number | undefined;
}

export interface IMember extends IMemberShort {
  person: IPerson;
  team: ITeam;
}
