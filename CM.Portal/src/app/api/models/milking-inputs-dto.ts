/* tslint:disable */
/* eslint-disable */
import { DateOnly } from '../models/date-only';
import { MilkingInputDto } from '../models/milking-input-dto';
export interface MilkingInputsDto {
  date?: DateOnly;
  milkingInputs?: Array<MilkingInputDto> | null;
}
