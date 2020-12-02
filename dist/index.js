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
        const m = moment_timezone_1.default.tz(process.env.TZ).add(1, 'days');
        return m.toDate();
    }
    static fromDate(data, disableTz) {
        const m = disableTz ? moment_timezone_1.default(data) : moment_timezone_1.default(data).tz(process.env.TZ);
        return m.format('DD/MM/YYYY');
    }
    static fromTime(data, disableTz) {
        const m = disableTz ? moment_timezone_1.default(data) : moment_timezone_1.default(data).tz(process.env.TZ);
        return m.format('HH:mm');
    }
    static fromDateTime(data, disableTz) {
        const m = disableTz ? moment_timezone_1.default(data) : moment_timezone_1.default(data).tz(process.env.TZ);
        return m.format('DD/MM/YYYY HH:mm');
    }
    static fromDbDate(data, disableTz) {
        const m = disableTz ? moment_timezone_1.default(data) : moment_timezone_1.default(data).tz(process.env.TZ);
        return m.format('YYYY-MM-DD');
    }
    static fromDbDateTime(data, disableTz) {
        const m = disableTz ? moment_timezone_1.default(data) : moment_timezone_1.default(data).tz(process.env.TZ);
        return m.format('YYYY-MM-DD HH:mm');
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
