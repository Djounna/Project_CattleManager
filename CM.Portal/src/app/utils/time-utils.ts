export class TimeUtils{
    static dayInMs = 1000 * 60 * 60 * 24;

    public static DaysBetween(date1: Date, date2: Date): number{
        return Math.round((date2.getTime() - date1.getTime())/this.dayInMs)
    }

    public static AddMonthsToDate(date: Date, months: number) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
    }
}