/* tslint:disable */
/* eslint-disable */
import { CowDto } from './cow-dto';
import { ParentDto } from './parent-dto';
export interface CowGenealogyDto {
  cow?: CowDto;
  father?: ParentDto;
  mother?: ParentDto;
}
