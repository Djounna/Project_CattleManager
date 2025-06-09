import { CattleStatisticsDto, ConditionDto, CowDetailsDto, CowDto, CowGenealogyDto, GestationDto, GroupDto, InterventionDto, TreatmentDto, VaccinationDto } from "../../api/models";

export interface CattleStateModel {
  Cow?: CowDto,
  CowDetails?: CowDetailsDto,
  CowGenealogy?: CowGenealogyDto,
  Cows: CowDto[],
  CowIdentifierDictionnary: Map<number, string>,
  CowIdentifierMaleDictionnary: Map<number, string>,
  CowIdentifierFemaleDictionnary: Map<number, string>,
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
