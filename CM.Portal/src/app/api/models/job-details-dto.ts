/* tslint:disable */
/* eslint-disable */
import { CowDto } from '../models/cow-dto';
import { PenDto } from '../models/pen-dto';
import { UserDto } from '../models/user-dto';
export interface JobDetailsDto {
  cow?: CowDto;
  date?: string;
  description?: string | null;
  id?: number;
  infos?: string | null;
  pen?: PenDto;
  status?: string | null;
  title?: string | null;
  workers?: Array<UserDto> | null;
}
