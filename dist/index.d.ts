declare class Dates {
    static now(): Date;
    static tomorrow(): Date;
    static fromDate(data: Date): string;
    static fromTime(data: Date): string;
    static fromDateTime(data: Date): string;
    static fromDbDate(data: Date): string;
    static fromDbDateTime(data: Date): string;
    static toDate(data: string): Date;
    static toTime(data: string): Date;
    static toDateTime(data: string): Date;
    static toDbDate(data: string): Date;
    static toDbDateTime(data: string): Date;
}
export default Dates;
