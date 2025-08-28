import {Formatter, Level, LevelPolicy, LogRecord, Transport} from "./interfaces";

export class LoggerClass {
    constructor(private policy: LevelPolicy, private formatter: Formatter, private transport: Transport) {}


    //private method that uses strategies to create the logger
    private _log(level: Level, message: string, meta?:Record<string, unknown>): void {
        if (!this.policy.allow(level)) return;

        const logRecord: LogRecord = {
            level,
            message,
            timestamp: new Date(),
            meta: meta? meta : undefined,
        }

        const formatterStr = this.formatter.format(logRecord);
        this.transport.send(logRecord ,formatterStr)
    }

    info(message: string, meta?:Record<string, unknown>): void {
        this._log('info', message, meta)
    }

    debug(message: string, meta?:Record<string, unknown>): void {
        this._log('debug', message, meta)
    }

    warn(message: string, meta?:Record<string, unknown>): void {
        this._log('warn', message, meta)
    }

    error(message: string, meta?:Record<string, unknown>): void {
        this._log('error', message, meta)
    }
}