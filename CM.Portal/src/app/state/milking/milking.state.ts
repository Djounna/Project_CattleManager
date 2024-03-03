import { MilkProductionDto, MilkingDto, MilkingInputsDto } from "../../api/models"

export interface MilkingStateModel{
    Milkings : MilkingDto[]
    MilkProductions : MilkProductionDto[]
    MilkingInputs? : MilkingInputsDto
}