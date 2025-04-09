/* tslint:disable */
/* eslint-disable */
import { CowDto } from './cow-dto';
import { PenDto } from './pen-dto';
import { UserDto } from './user-dto';
export interface JobDetailsDto {
  cow?: CowDto;
  date?: string;
  description?: null | string;
  id?: number;
  infos?: null | string;
  pen?: PenDto;
  status?: null | string;
  title?: null | string;
  workers?: null | Array<UserDto>;
}
