import {Formatter, LogRecord} from "../../interfaces";

export class TextFormatterClass implements Formatter {
    format(record: LogRecord): string {
        return `[${record.timestamp.toISOString()}]
         ${record.level.toUpperCase()}
          ${record.message}`;
    }
}