import {FakeTransportClass} from "../src/concrete strategies/transports/fakeTransportClass";
import {TextFormatterClass} from "../src/concrete strategies/formatters/textFormatterClass";
import {MinLevelPolicyClass} from "../src/concrete strategies/policies/minLevelPolicyClass";
import {LoggerClass} from "../src/LoggerClass";
import {AllowErrorsOnlyPolicyClass} from "../src/concrete strategies/policies/allowErrorsOnlyPolicyClass";

// בדיקה 1: סינון לפי רמה מינימלית
describe('Logger with MinLevelPolicy', () => {
    it('should only log messages at or above the minimum level', () => {
        const fakeTransport = new FakeTransportClass();
        const formatter = new TextFormatterClass();
        const policy = new MinLevelPolicyClass('warn'); // נגדיר רמה מינימלית 'warn'
        const logger = new LoggerClass(policy, formatter, fakeTransport);

        // הדפסת לוגים
        logger.debug('Debug message');
        logger.info('Info message');
        logger.warn('Warning message');
        logger.error('Error message');


        expect(fakeTransport.logs.length).toBe(2);
        expect(fakeTransport.logs[0]).toContain('WARN');
        expect(fakeTransport.logs[1]).toContain('ERROR');
    });
});

// בדיקה 2: סינון שגיאות בלבד
describe('Logger with AllowErrorsOnlyPolicy', () => {
    it('should only allow error messages', () => {
        const fakeTransport = new FakeTransportClass();
        const formatter = new TextFormatterClass();
        const policy = new AllowErrorsOnlyPolicyClass(); // מדיניות של שגיאות בלבד
        const logger = new LoggerClass(policy, formatter, fakeTransport);

        logger.debug('Debug message');
        logger.info('Info message');
        logger.warn('Warning message');
        logger.error('Error message');

        // בדיקה שהודעת השגיאה היחידה נלכדה
        expect(fakeTransport.logs.length).toBe(1);
        expect(fakeTransport.logs[0]).toContain('ERROR');
    });
});