/* tslint:disable */
/* eslint-disable */
import { AgeGenderGroupStatisticDto } from '../models/age-gender-group-statistic-dto';
import { AgeGroupStatisticDto } from '../models/age-group-statistic-dto';
import { GroupStatisticDto } from '../models/group-statistic-dto';
import { PenStatisticDto } from '../models/pen-statistic-dto';
import { RaceGroupStatisticDto } from '../models/race-group-statistic-dto';
export interface CattleStatisticsDto {
  ageGenderGroupStatisticsFemale?: Array<AgeGenderGroupStatisticDto> | null;
  ageGenderGroupStatisticsMale?: Array<AgeGenderGroupStatisticDto> | null;
  ageGroupStatistics?: Array<AgeGroupStatisticDto> | null;
  groupStatistics?: Array<GroupStatisticDto> | null;
  penStatistics?: Array<PenStatisticDto> | null;
  raceGroupStatistics?: Array<RaceGroupStatisticDto> | null;
}
