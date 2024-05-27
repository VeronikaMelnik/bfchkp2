import { BaseEntity } from './global.interface';
import { IPerson } from './user.interface';

export interface IJudge extends BaseEntity {
  personId: number;
  person: IPerson;
}
