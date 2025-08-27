import {Level, LevelPolicy} from "../interfaces";

export class MinLevelPolicyClass implements LevelPolicy {
    constructor(private minLevel: Level) {}

    private _getLevelValue(level: Level): number {
        switch (level.toUpperCase()) {
            case 'ERROR':
                return 0;
            case 'WARN':
                return 1;
            case 'INFO':
                return 2;
            case 'DEBUG':
                return 3;
            default:
                return 3;
        }
    }

    allow(level: Level): boolean {
        const receivedLevelValue = this._getLevelValue(level)
        const minLevelValue = this._getLevelValue(this.minLevel)

        return receivedLevelValue >= minLevelValue
    }
}