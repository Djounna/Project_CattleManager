/* tslint:disable */
/* eslint-disable */
import { AgeGroupStatisticDto } from './age-group-statistic-dto';
import { GroupStatisticDto } from './group-statistic-dto';
import { PenStatisticDto } from './pen-statistic-dto';
export interface CattleStatisticsDto {
  ageGroupStatistics?: null | Array<AgeGroupStatisticDto>;
  groupStatistics?: null | Array<GroupStatisticDto>;
  penStatistics?: null | Array<PenStatisticDto>;
}
