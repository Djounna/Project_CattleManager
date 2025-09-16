/* tslint:disable */
/* eslint-disable */
import { DateOnly } from '../models/date-only';
export interface MilkingInputDto {
  cancelled?: boolean;
  cowId?: number;
  date?: DateOnly;
  done?: boolean;
  volume?: number;
}
