/* tslint:disable */
/* eslint-disable */
import { DateOnly } from '../models/date-only';
export interface PenMoveDto {
  cowId?: number;
  date?: DateOnly;
  destinationPenId?: number;
  sourcePenId?: number | null;
}
