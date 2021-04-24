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

    public static fromDate(date: Date): string {
        return moment(date).tz(process.env.TZ).format('DD/MM/YYYY');
    }

    public static fromTime(date: Date): string {
        return moment(date).tz(process.env.TZ).format('HH:mm');
    }

    public static fromDateTime(date: Date): string {
        return moment(date).tz(process.env.TZ).format('DD/MM/YYYY HH:mm');
    }

    public static fromDbDate(date: Date): string {
        return moment(date).tz(process.env.TZ).format('YYYY-MM-DD');
    }

    public static fromDbDateTime(date: Date): string {
        return moment(date).tz(process.env.TZ).format('YYYY-MM-DD HH:mm');
    }

    public static toDate(date: string): Date {
        const m: any = moment.tz(date, 'DD/MM/YYYY', process.env.TZ);

        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }

    public static toDateTime(date: string): Date {
        const m: any = moment.tz(date, 'DD/MM/YYYY HH:mm', process.env.TZ);

        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }

    public static toDbDate(date: string): Date {
        const m: any = moment.tz(date, 'YYYY-MM-DD', process.env.TZ);

        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }

    public static toDbDateTime(date: string): Date {
        const m: any = moment.tz(date, 'YYYY-MM-DD HH:mm', process.env.TZ);

        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
}

export default Dates;
