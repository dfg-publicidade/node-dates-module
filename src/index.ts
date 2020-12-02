import moment from 'moment-timezone';

/* Module */
class Dates {
    public static now(): Date {
        const m: any = moment.tz(process.env.TZ);

        return m.toDate();
    }
}

export default Dates;
