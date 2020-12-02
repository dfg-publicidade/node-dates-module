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
}
exports.default = Dates;
