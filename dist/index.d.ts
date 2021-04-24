declare class Dates {
    static now(): Date;
    static tomorrow(): Date;
    static fromDate(date: Date): string;
    static fromTime(date: Date): string;
    static fromDateTime(date: Date): string;
    static fromDbDate(date: Date): string;
    static fromDbDateTime(date: Date): string;
    static toDate(date: string): Date;
    static toDateTime(date: string): Date;
    static toDbDate(date: string): Date;
    static toDbDateTime(date: string): Date;
}
export default Dates;
