/* tslint:disable */
/* eslint-disable */
import { CowDto } from './cow-dto';
import { PenDto } from './pen-dto';
import { UserDto } from './user-dto';
export interface JobDetailsDto {
  cow?: CowDto;
  description?: null | string;
  id?: number;
  length?: null | number;
  pen?: PenDto;
  status?: null | string;
  title?: null | string;
  workers?: null | Array<UserDto>;
}
