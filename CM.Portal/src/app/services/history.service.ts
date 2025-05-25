import { inject, Injectable } from "@angular/core";
import { CowDetailsDto } from "../api/models";
import { HistoryEvent, HistoryEventType } from "../models/history/historyEvent";
import { PenNamePipe } from "../utils/pipes/pen-name.pipe";
import { GroupNamePipe } from "../utils/pipes/group-name.pipe";
import { LoaderService } from "./loader.service";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    protected loader = inject(LoaderService);
    constructor(
        private penNamePipe: PenNamePipe,
        private groupNamePipe: GroupNamePipe,
    ){}

    public GenerateHistoryEvents(cowDetails: CowDetailsDto): HistoryEvent[]{
        this.loader.show()

        let events : HistoryEvent[] = [];
        let birthEvent: HistoryEvent = {
            Title: 'Birth',
            Type: HistoryEventType.Birth,
            Date: cowDetails.birthDate as string
        }
        events.push(birthEvent);

        cowDetails.conditions?.forEach(i => {
            let event: HistoryEvent = 
            {
                Title: 'Affection' + i.type,
                Type: HistoryEventType.Intervention,
                Date: i.startDate as string
            };
            events.push(event);
        });
        cowDetails.treatments?.forEach(i => {
            let event: HistoryEvent = 
            {
                Title: 'Traitement' + i.name,
                Type: HistoryEventType.Intervention,
                Date: i.date as string
            };
            events.push(event);
        });

        cowDetails.interventions?.forEach(i => {
            let event: HistoryEvent = 
            {
                Title: 'Intervention' + i.type,
                Type: HistoryEventType.Intervention,
                Date: i.date as string
            };
            events.push(event);
        });

        cowDetails.vaccinations?.forEach(v => {
            let event: HistoryEvent = 
            {
                Title: 'Vaccination' + v.name,
                Type: HistoryEventType.Vaccination,
                Date: v.date as string
            }
            events.push(event);
        });

        cowDetails.gestations?.forEach(g => {
            if(!!g.calvingDate)
            {
                let event: HistoryEvent = {
                    Title: 'Calving',
                    Type: HistoryEventType.Gestation,
                    Date: g.calvingDate as string
                }
                events.push(event);
            }
        });
        cowDetails.penMoves?.forEach(pm => {
            let event: HistoryEvent = {
                Title: 'Move to ' + this.penNamePipe.transform(pm.destinationPenId),
                Type: HistoryEventType.PenMove,
                Date: pm.date as string
            }
            events.push(event);
        });
        cowDetails.groupMoves?.forEach(gm => {
            let event: HistoryEvent = {
                Title: 'Moved to ' + this.groupNamePipe.transform(gm.destinationGroupId),
                Type: HistoryEventType.GroupMove,
                Date: gm.date as string,
            }
            events.push(event);
        });

        events.sort((a, b) => {return new Date(a.Date).getTime() - new Date(b.Date).getTime()})

        this.loader.hide();

        return events;
    }
}