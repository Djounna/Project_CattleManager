/* tslint:disable */
/* eslint-disable */
import { DailyMilking } from '../models/daily-milking';
import { DailyTasks } from '../models/daily-tasks';
import { GroupInfo } from '../models/group-info';
import { PenInfo } from '../models/pen-info';
export interface DashboardInfoDto {
  cattleTotal?: number;
  dailyMilking?: DailyMilking;
  dailyTasks?: DailyTasks;
  groupInfos?: Array<GroupInfo> | null;
  penInfos?: Array<PenInfo> | null;
}
