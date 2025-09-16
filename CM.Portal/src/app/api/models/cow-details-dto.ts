/* tslint:disable */
/* eslint-disable */
import { ConditionDto } from '../models/condition-dto';
import { CowDto } from '../models/cow-dto';
import { GestationDto } from '../models/gestation-dto';
import { GroupDto } from '../models/group-dto';
import { GroupMoveDto } from '../models/group-move-dto';
import { InterventionDto } from '../models/intervention-dto';
import { PenDto } from '../models/pen-dto';
import { PenMoveDto } from '../models/pen-move-dto';
import { TreatmentDto } from '../models/treatment-dto';
import { VaccinationDto } from '../models/vaccination-dto';
export interface CowDetailsDto {
  birthDate?: string;
  children?: Array<CowDto> | null;
  conditions?: Array<ConditionDto> | null;
  gender?: string | null;
  gestations?: Array<GestationDto> | null;
  group?: GroupDto;
  groupMoves?: Array<GroupMoveDto> | null;
  id?: number;
  identifier?: string | null;
  imgLink?: string | null;
  interventions?: Array<InterventionDto> | null;
  milkCow?: boolean;
  name?: string | null;
  pen?: PenDto;
  penMoves?: Array<PenMoveDto> | null;
  race?: string | null;
  treatments?: Array<TreatmentDto> | null;
  vaccinations?: Array<VaccinationDto> | null;
}
