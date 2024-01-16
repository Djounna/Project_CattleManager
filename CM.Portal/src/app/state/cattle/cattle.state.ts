import { CowDto, GestationDto, GroupDto, InterventionDto } from "../../api/models";

export interface CattleStateModel{
    Cows : CowDto[],
    Groups : GroupDto[],
    Gestations : GestationDto[],
    Interventions : InterventionDto[]
}