/* eslint-disable no-null/no-null */
import moment from 'moment-timezone';

/* Module */
class Dates {
    public static now(): Date {
        const m: any = moment.tz(process.env.TZ);

        return m.toDate();
    }

    public static tomorrow(): Date {
        const m: any = moment.tz(process.env.TZ).add(1, 'days');

        return m.toDate();
    }

    public static fromDate(data: Date, disableTz?: boolean): string {
        const m: any = disableTz ? moment(data) : moment(data).tz(process.env.TZ);

        return m.format('DD/MM/YYYY');
    }

    public static fromTime(data: Date, disableTz?: boolean): string {
        const m: any = disableTz ? moment(data) : moment(data).tz(process.env.TZ);

        return m.format('HH:mm');
    }

    public static fromDateTime(data: Date, disableTz?: boolean): string {
        const m: any = disableTz ? moment(data) : moment(data).tz(process.env.TZ);

        return m.format('DD/MM/YYYY HH:mm');
    }

    public static fromDbDate(data: Date, disableTz?: boolean): string {
        const m: any = disableTz ? moment(data) : moment(data).tz(process.env.TZ);

        return m.format('YYYY-MM-DD');
    }

    public static fromDbDateTime(data: Date, disableTz?: boolean): string {
        const m: any = disableTz ? moment(data) : moment(data).tz(process.env.TZ);

        return m.format('YYYY-MM-DD HH:mm');
    }

    public static toDate(data: string): Date {
        const m: any = moment.tz(data, 'DD/MM/YYYY', process.env.TZ);

        return m.isValid() ? m.toDate() : null;
    }

    public static toTime(data: string): Date {
        const m: any = moment.tz(data, 'HH:mm', process.env.TZ);

        return m.isValid() ? m.toDate() : null;
    }

    public static toDateTime(data: string): Date {
        const m: any = moment.tz(data, 'DD/MM/YYYY HH:mm', process.env.TZ);

        return m.isValid() ? m.toDate() : null;
    }

    public static toDbDate(data: string): Date {
        const m: any = moment.tz(data, 'YYYY-MM-DD', process.env.TZ);

        return m.isValid() ? m.toDate() : null;
    }

    public static toDbDateTime(data: string): Date {
        const m: any = moment.tz(data, 'YYYY-MM-DD HH:mm', process.env.TZ);

        return m.isValid() ? m.toDate() : null;
    }
}

export default Dates;
