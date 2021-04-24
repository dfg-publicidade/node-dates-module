"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
/* Module */
class Dates {
    static now() {
        const m = moment_timezone_1.default.tz(process.env.TZ);
        return m.toDate();
    }
    static tomorrow() {
        return moment_timezone_1.default.tz(process.env.TZ).add(1, 'days').startOf('day').toDate();
    }
    static fromDate(date) {
        return moment_timezone_1.default(date).tz(process.env.TZ).format('DD/MM/YYYY');
    }
    static fromTime(date) {
        return moment_timezone_1.default(date).tz(process.env.TZ).format('HH:mm');
    }
    static fromDateTime(date) {
        return moment_timezone_1.default(date).tz(process.env.TZ).format('DD/MM/YYYY HH:mm');
    }
    static fromDbDate(date) {
        return moment_timezone_1.default(date).tz(process.env.TZ).format('YYYY-MM-DD');
    }
    static fromDbDateTime(date) {
        return moment_timezone_1.default(date).tz(process.env.TZ).format('YYYY-MM-DD HH:mm');
    }
    static toDate(date) {
        const m = moment_timezone_1.default.tz(date, 'DD/MM/YYYY', process.env.TZ);
        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
    static toDateTime(date) {
        const m = moment_timezone_1.default.tz(date, 'DD/MM/YYYY HH:mm', process.env.TZ);
        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
    static toDbDate(date) {
        const m = moment_timezone_1.default.tz(date, 'YYYY-MM-DD', process.env.TZ);
        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
    static toDbDateTime(date) {
        const m = moment_timezone_1.default.tz(date, 'YYYY-MM-DD HH:mm', process.env.TZ);
        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
}
exports.default = Dates;
