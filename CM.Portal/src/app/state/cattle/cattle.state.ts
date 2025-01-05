import { CowDto, GestationDto, GroupDto, InterventionDto } from "../../api/models";

export interface CattleStateModel {
  Cows: CowDto[],
  Groups: GroupDto[],
  GroupDictionnary: Map<number, string>,
  Gestations: GestationDto[],
  Interventions: InterventionDto[]
}
