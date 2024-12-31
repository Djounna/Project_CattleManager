/* tslint:disable */
/* eslint-disable */
import { DateOnly } from './date-only';
export interface MilkingInputDto {
  cowId?: number;
  date?: DateOnly;
  done?: boolean;
  volume?: number;
}
