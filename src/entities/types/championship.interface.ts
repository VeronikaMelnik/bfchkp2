import { IChampionshipDiscipline } from './championshipJudge.interface';
import { IChampionshipJudge } from './championshipJudge.interface copy';
import { BaseEntity } from './global.interface';

export interface IChampionship extends BaseEntity {
  name: string;
  date: Date;
  championShipJudges: IChampionshipJudge;
  championShipDisciplines: IChampionshipDiscipline;
}
