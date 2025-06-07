import { AlertDto } from "../api/models";

// Sort using the priorityOrder
export class SortUtils{
    public static SortAlertsByPriorityLevel(items: AlertDto[]){
        
        const priorityOrder: Record<string, number> = {
        'Haut': 0,
        'Moyen': 1,
        'Bas': 2,
        };

        items.sort((a, b) => priorityOrder[a.level!] - priorityOrder[b.level!]);
        return items;
    }
}
