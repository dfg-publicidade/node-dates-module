import { expect } from 'chai';
import { before, describe, it } from 'mocha';
import Dates from '../src';

/* Tests */
describe('index.ts', (): void => {
    let testDate: Date;
    let testDateTime: Date;
    let testTime: Date;

    before(async (): Promise<void> => {
        testDate = new Date();
        // eslint-disable-next-line no-magic-numbers
        testDate.setFullYear(2021);
        testDate.setMonth(0);
        testDate.setDate(1);
        testDate.setHours(0);
        testDate.setMinutes(0);
        testDate.setSeconds(0);
        testDate.setMilliseconds(0);

        testDateTime = new Date();
        // eslint-disable-next-line no-magic-numbers
        testDateTime.setFullYear(2021);
        testDateTime.setMonth(0);
        testDateTime.setDate(1);
        // eslint-disable-next-line no-magic-numbers
        testDateTime.setHours(14);
        testDateTime.setMinutes(0);
        testDateTime.setSeconds(0);
        testDateTime.setMilliseconds(0);

        testTime = new Date();
        // eslint-disable-next-line no-magic-numbers
        testTime.setHours(14);
        testTime.setMinutes(0);
        testTime.setSeconds(0);
        testTime.setMilliseconds(0);
    });

    it('1. now', async (): Promise<void> => {
        const now: Date = Dates.now();
        const newDate: Date = new Date();

        now.setMilliseconds(0);
        newDate.setMilliseconds(0);

        expect(now).to.be.deep.equal(newDate);
    });

    it('2. tomorrow', async (): Promise<void> => {
        const now: Date = Dates.tomorrow();
        const newDate: Date = new Date();

        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        newDate.setMilliseconds(0);

        // eslint-disable-next-line no-magic-numbers
        expect(now.getTime() - newDate.getTime()).to.be.equal(24 * 60 * 60 * 1000);
    });

    it('3. fromDate', async (): Promise<void> => {
        expect(Dates.fromDate(testDate)).to.be.eq('01/01/2021');
    });

    it('4. fromTime', async (): Promise<void> => {
        expect(Dates.fromTime(testTime)).to.be.eq('14:00');
    });

    it('5. fromDateTime', async (): Promise<void> => {
        expect(Dates.fromDateTime(testDateTime)).to.be.eq('01/01/2021 14:00');
    });

    it('6. fromDbDate', async (): Promise<void> => {
        expect(Dates.fromDbDate(testDate)).to.be.eq('2021-01-01');
    });

    it('7. fromDbDateTime', async (): Promise<void> => {
        expect(Dates.fromDbDateTime(testDateTime)).to.be.eq('2021-01-01 14:00');
    });

    it('8. toDate', async (): Promise<void> => {
        expect(Dates.toDate('01/01/2021')).to.be.deep.eq(testDate);
        expect(Dates.toDate('invalid')).to.be.undefined;
    });

    it('9. toDateTime', async (): Promise<void> => {
        expect(Dates.toDateTime('01/01/2021 14:00')).to.be.deep.eq(testDateTime);
        expect(Dates.toDateTime('invalid')).to.be.undefined;
    });

    it('10. toDbDate', async (): Promise<void> => {
        expect(Dates.toDbDate('2021-01-01')).to.be.deep.eq(testDate);
        expect(Dates.toDbDate('invalid')).to.be.undefined;
    });

    it('11. toDbDateTime', async (): Promise<void> => {
        expect(Dates.toDbDateTime('2021-01-01 14:00')).to.be.deep.eq(testDateTime);
        expect(Dates.toDbDateTime('invalid')).to.be.undefined;
    });

});
