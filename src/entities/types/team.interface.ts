import { BaseEntity } from './global.interface';

export interface ITeam extends BaseEntity {
  name: string;
  city: string;
  address: string;
  logo?: string;
}
