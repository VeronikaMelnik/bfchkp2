import { IChampionship } from './championship.interface';
import { BaseEntity } from './global.interface';
import { IJudge } from './judge.interface';

export interface IChampionshipJudgeShort extends BaseEntity {
  championshipId: number;
  judgeId: number;
}

export interface IChampionshipJudge extends IChampionshipJudgeShort {
  championship: IChampionship;
  judge: IJudge;
}
