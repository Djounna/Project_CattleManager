/* tslint:disable */
/* eslint-disable */
import { DateOnly } from './date-only';
export interface GroupMoveDto {
  cowId?: number;
  date?: DateOnly;
  destinationGroupId?: number;
  sourceGroupId?: null | number;
}
