/* tslint:disable */
/* eslint-disable */
import { DateOnly } from './date-only';
export interface MilkingInputDto {
  cancelled?: boolean;
  cowId?: number;
  date?: DateOnly;
  done?: boolean;
  volume?: number;
}
