import { CattleStatisticsDto, ConditionDto, CowDetailsDto, CowDto, GestationDto, GroupDto, InterventionDto, TreatmentDto, VaccinationDto } from "../../api/models";

export interface CattleStateModel {
  Cow?: CowDto,
  CowDetails?: CowDetailsDto,
  Cows: CowDto[],
  CowIdentifierDictionnary: Map<number, string>,
  CowNameDictionnary: Map<number, string>,
  Groups: GroupDto[],
  GroupDictionnary: Map<number, string>,
  Gestations: GestationDto[],
  Interventions: InterventionDto[],
  Vaccinations: VaccinationDto[],
  Conditions: ConditionDto[],
  Treatments: TreatmentDto[],
  CattleStatistics?: CattleStatisticsDto,
}
