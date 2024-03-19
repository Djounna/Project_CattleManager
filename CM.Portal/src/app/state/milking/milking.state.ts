import { MilkProductionDto, MilkingDto, MilkingInputsDto } from "../../api/models"

export interface MilkingStateModel{
    Milkings : MilkingDto[],
    MonthMilkings : MilkingDto[], // Milkings for the last 30 days
    MilkProductions : MilkProductionDto[]
    MilkingInputs? : MilkingInputsDto // MilkingsInput for the last selected date
}