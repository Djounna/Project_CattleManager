/* tslint:disable */
/* eslint-disable */
import { CowDto } from './cow-dto';
export interface GroupDetailsDto {
  cows?: null | Array<CowDto>;
  description?: null | string;
  id?: number;
  imgLink?: null | string;
  name?: null | string;
}
