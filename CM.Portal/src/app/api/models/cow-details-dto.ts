/* tslint:disable */
/* eslint-disable */
import { ConditionDto } from './condition-dto';
import { CowDto } from './cow-dto';
import { GenealogyDto } from './genealogy-dto';
import { GestationDto } from './gestation-dto';
import { GroupDto } from './group-dto';
import { GroupMoveDto } from './group-move-dto';
import { InterventionDto } from './intervention-dto';
import { MilkingDto } from './milking-dto';
import { PenDto } from './pen-dto';
import { PenMoveDto } from './pen-move-dto';
import { TreatmentDto } from './treatment-dto';
import { VaccinationDto } from './vaccination-dto';
export interface CowDetailsDto {
  birthDate?: string;
  children?: null | Array<CowDto>;
  conditions?: null | Array<ConditionDto>;
  gender?: null | string;
  genealogy?: GenealogyDto;
  gestations?: null | Array<GestationDto>;
  group?: GroupDto;
  groupMoves?: null | Array<GroupMoveDto>;
  id?: number;
  identifier?: null | string;
  imgLink?: null | string;
  interventions?: null | Array<InterventionDto>;
  milkCow?: boolean;
  milkings?: null | Array<MilkingDto>;
  name?: null | string;
  pen?: PenDto;
  penMoves?: null | Array<PenMoveDto>;
  race?: null | string;
  treatments?: null | Array<TreatmentDto>;
  vaccinations?: null | Array<VaccinationDto>;
}
