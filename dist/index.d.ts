declare class Dates {
    static now(): Date;
    static tomorrow(): Date;
    static fromDate(data: Date, disableTz?: boolean): string;
    static fromTime(data: Date, disableTz?: boolean): string;
    static fromDateTime(data: Date, disableTz?: boolean): string;
    static fromDbDate(data: Date, disableTz?: boolean): string;
    static fromDbDateTime(data: Date, disableTz?: boolean): string;
    static toDate(data: string): Date;
    static toTime(data: string): Date;
    static toDateTime(data: string): Date;
    static toDbDate(data: string): Date;
    static toDbDateTime(data: string): Date;
}
export default Dates;
