import { CowDto, GestationDto, GroupDto, InterventionDto, VaccinationDto } from "../../api/models";

export interface CattleStateModel {
  Cows: CowDto[],
  CowIdentifierDictionnary: Map<number, string>,
  CowNameDictionnary: Map<number, string>,
  Groups: GroupDto[],
  GroupDictionnary: Map<number, string>,
  Gestations: GestationDto[],
  Interventions: InterventionDto[],
  Vaccinations: VaccinationDto[]
}
