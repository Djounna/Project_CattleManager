import { CowDto, GestationDto, GroupDto, InterventionDto, VaccinationDto } from "../../api/models";

export interface CattleStateModel {
  Cows: CowDto[],
  Groups: GroupDto[],
  GroupDictionnary: Map<number, string>,
  Gestations: GestationDto[],
  Interventions: InterventionDto[],
  Vaccinations: VaccinationDto[]
}
