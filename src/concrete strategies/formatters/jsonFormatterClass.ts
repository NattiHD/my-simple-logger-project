import {Formatter, LogRecord} from "../../interfaces";

export class JsonFormatterClass implements Formatter {
    format(record: LogRecord): string {
        return JSON.stringify(record);
    }
}