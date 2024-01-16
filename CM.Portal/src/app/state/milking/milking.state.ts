import { MilkProductionDto, MilkingDto } from "../../api/models"

export interface MilkingStateModel{
    Milkings : MilkingDto[]
    MilkProductions : MilkProductionDto[]
}