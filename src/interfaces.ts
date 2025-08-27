// type definitions

export type Level = 'info' | 'debug' | 'warn' | 'error';

// general log structure
export interface LogRecord {
    level: Level;
    message: string;
    timestamp: Date;
    meta?: Record<string, unknown>;
}

// interfaces in the sense of contracts:

// responsible for sending the log to a specific destination
export interface Transport {
    send(record: LogRecord, formatted: string): void | Promise<void>;
}

// responsible for log design
export interface Formatter {
    format(record: LogRecord): string;
}

// Is log allowed or not?
export interface LevelPolicy {
    allow(level: Level): boolean;
}