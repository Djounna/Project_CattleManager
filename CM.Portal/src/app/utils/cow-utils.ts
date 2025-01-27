import { TimeUtils } from "./time-utils";

export class CowUtils{
    public static ComputeProgress(startDate : Date, calvingDate: Date): number{ 
        let totalDays = TimeUtils.DaysBetween(startDate, calvingDate);
        let now = new Date();
        let doneDays = TimeUtils.DaysBetween(startDate, now);
        let progress = (Math.round((doneDays/totalDays) * 100)/100)*100;
        return progress;
    }

    public static GetCalvingDateFromStartDate(startDate: Date): Date{
        return TimeUtils.AddMonthsToDate(startDate, 9);
    }

}