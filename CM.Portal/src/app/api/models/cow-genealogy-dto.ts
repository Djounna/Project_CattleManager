/* tslint:disable */
/* eslint-disable */
import { CowDto } from '../models/cow-dto';
import { ParentDto } from '../models/parent-dto';
export interface CowGenealogyDto {
  cow?: CowDto;
  father?: ParentDto;
  mother?: ParentDto;
}
