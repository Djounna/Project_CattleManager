/* tslint:disable */
/* eslint-disable */
import { CowDto } from '../models/cow-dto';
export interface PenDetailsDto {
  cows?: Array<CowDto> | null;
  id?: number;
  name?: string | null;
  size?: number;
}
