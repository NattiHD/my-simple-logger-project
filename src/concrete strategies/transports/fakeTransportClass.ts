import {LogRecord, Transport} from "../../interfaces";

export class FakeTransportClass implements Transport {

    //array of logs to tests
    public logs:string[] = []

    send(record: LogRecord, formatted: string): void | Promise<void> {
        this.logs.push(formatted);
    }

    getLogs(): string[] {
        return this.logs;
    }
}