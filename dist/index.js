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
        return moment_timezone_1.default.tz(process.env.TZ).add(1, 'days').toDate();
    }
    static fromDate(data) {
        return moment_timezone_1.default(data).tz(process.env.TZ).format('DD/MM/YYYY');
    }
    static fromTime(data) {
        return moment_timezone_1.default(data).tz(process.env.TZ).format('HH:mm');
    }
    static fromDateTime(data) {
        return moment_timezone_1.default(data).tz(process.env.TZ).format('DD/MM/YYYY HH:mm');
    }
    static fromDbDate(data) {
        return moment_timezone_1.default(data).tz(process.env.TZ).format('YYYY-MM-DD');
    }
    static fromDbDateTime(data) {
        return moment_timezone_1.default(data).tz(process.env.TZ).format('YYYY-MM-DD HH:mm');
    }
    static toDate(data) {
        const m = moment_timezone_1.default.tz(data, 'DD/MM/YYYY', process.env.TZ);
        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
    static toTime(data) {
        const m = moment_timezone_1.default.tz(data, 'HH:mm', process.env.TZ);
        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
    static toDateTime(data) {
        const m = moment_timezone_1.default.tz(data, 'DD/MM/YYYY HH:mm', process.env.TZ);
        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
    static toDbDate(data) {
        const m = moment_timezone_1.default.tz(data, 'YYYY-MM-DD', process.env.TZ);
        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
    static toDbDateTime(data) {
        const m = moment_timezone_1.default.tz(data, 'YYYY-MM-DD HH:mm', process.env.TZ);
        // eslint-disable-next-line no-null/no-null
        return m.isValid() ? m.toDate() : null;
    }
}
exports.default = Dates;
