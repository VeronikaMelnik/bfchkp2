import { IChampionship } from './championship.interface';
import { IDiscipline } from './discipline.interface';
import { BaseEntity } from './global.interface';

export interface IChampionshipDisciplineShort extends BaseEntity {
  championshipId: number;
  disciplineId: number;
}

export interface IChampionshipDiscipline extends IChampionshipDisciplineShort {
  championship: IChampionship;
  discipline: IDiscipline;
}
