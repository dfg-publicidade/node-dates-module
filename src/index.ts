import moment from 'moment-timezone';

/* Module */
class Dates {
    public static now(): Date {
        const m: any = moment.tz(process.env.TZ);

        return m.toDate();
    }

    public static tomorrow(): Date {
        return moment.tz(process.env.TZ).add(1, 'days').startOf('day').toDate();
    }

    public static fromDate(data: Date): string {
        return moment(data).tz(process.env.TZ).format('DD/MM/YYYY');
    }

    public static fromTime(data: Date): string {
        return moment(data).tz(process.env.TZ).format('HH:mm');
    }

    public static fromDateTime(data: Date): string {
        return moment(data).tz(process.env.TZ).format('DD/MM/YYYY HH:mm');
    }

    public static fromDbDate(data: Date): string {
        return moment(data).tz(process.env.TZ).format('YYYY-MM-DD');
    }

    public static fromDbDateTime(data: Date): string {
        return moment(data).tz(process.env.TZ).format('YYYY-MM-DD HH:mm');
    }

    public static toDate(data: string): Date {
        const m: any = moment.tz(data, 'DD/MM/YYYY', process.env.TZ);

        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }

    public static toTime(data: string): Date {
        const m: any = moment.tz(data, 'HH:mm', process.env.TZ);

        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }

    public static toDateTime(data: string): Date {
        const m: any = moment.tz(data, 'DD/MM/YYYY HH:mm', process.env.TZ);

        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }

    public static toDbDate(data: string): Date {
        const m: any = moment.tz(data, 'YYYY-MM-DD', process.env.TZ);

        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }

    public static toDbDateTime(data: string): Date {
        const m: any = moment.tz(data, 'YYYY-MM-DD HH:mm', process.env.TZ);

        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
}

export default Dates;
