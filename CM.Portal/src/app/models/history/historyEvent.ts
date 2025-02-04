export interface HistoryEvent{
    Title : string,
    Type: HistoryEventType, 
    Date: string,
}

export enum HistoryEventType{
    Birth,
    Gestation,
    Intervention,
    Vaccination,
    PenMove,
    GroupMove,
}