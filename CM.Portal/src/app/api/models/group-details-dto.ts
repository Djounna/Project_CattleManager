/* tslint:disable */
/* eslint-disable */
import { CowDto } from '../models/cow-dto';
export interface GroupDetailsDto {
  cows?: Array<CowDto> | null;
  description?: string | null;
  id?: number;
  imgLink?: string | null;
  name?: string | null;
}
