/* tslint:disable */
/* eslint-disable */
import { DateOnly } from './date-only';
import { MilkingInputDto } from './milking-input-dto';
export interface MilkingInputsDto {
  date?: DateOnly;
  milkingInputs?: null | Array<MilkingInputDto>;
}
