import {LogRecord, Transport} from "../interfaces";

export class ConsoleTransportClass implements Transport {

    send(record: LogRecord, formatted: string): void | Promise<void> {
        console.log(formatted)
    }

}