/* tslint:disable */
/* eslint-disable */
import { DateOnly } from '../models/date-only';
export interface GroupMoveDto {
  cowId?: number;
  date?: DateOnly;
  destinationGroupId?: number;
  sourceGroupId?: number | null;
}
