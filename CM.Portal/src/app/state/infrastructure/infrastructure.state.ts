import { PenDto, StockDto } from "../../api/models";

export interface InfrastructureStateModel{
    Pens : PenDto[],
    Stocks : StockDto[]
}