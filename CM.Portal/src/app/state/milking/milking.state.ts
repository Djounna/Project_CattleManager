import { MilkProductionDto, MilkingDto, MilkingInputsDto, MilkingVolumeDto } from "../../api/models"

export interface MilkingStateModel{
    Milkings : MilkingDto[],
    MonthMilkings : MilkingDto[], // Milkings for the last 30 days
    SelectedCowMonthMilkings: MilkingDto[], // Milkings for the last 30 days for selected cow 
    MonthMilkingVolumes: MilkingVolumeDto[], // Milking volumes for the last x days
    MilkProductions : MilkProductionDto[]
    MilkingInputs? : MilkingInputsDto // MilkingsInput for the last selected date
}