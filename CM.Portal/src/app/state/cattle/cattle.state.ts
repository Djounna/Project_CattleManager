import { CowDto, GroupDto } from "../../api/models";

export interface CattleStateModel{
    Cows : CowDto[],
    Groups : GroupDto[],
}