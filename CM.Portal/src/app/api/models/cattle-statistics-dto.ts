/* tslint:disable */
/* eslint-disable */
import { AgeGenderGroupStatisticDto } from './age-gender-group-statistic-dto';
import { AgeGroupStatisticDto } from './age-group-statistic-dto';
import { GroupStatisticDto } from './group-statistic-dto';
import { PenStatisticDto } from './pen-statistic-dto';
export interface CattleStatisticsDto {
  ageGenderGroupStatisticsFemale?: null | Array<AgeGenderGroupStatisticDto>;
  ageGenderGroupStatisticsMale?: null | Array<AgeGenderGroupStatisticDto>;
  ageGroupStatistics?: null | Array<AgeGroupStatisticDto>;
  groupStatistics?: null | Array<GroupStatisticDto>;
  penStatistics?: null | Array<PenStatisticDto>;
}
