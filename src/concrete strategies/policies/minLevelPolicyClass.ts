import {Level, LevelPolicy} from "../../interfaces";

export class MinLevelPolicyClass implements LevelPolicy {
    constructor(private minLevel: Level) {}

    private _getLevelValue(level: Level): number {
        switch (level.toUpperCase()) {
            case 'DEBUG':
                return 0;
            case 'INFO':
                return 1;
            case 'WARN':
                return 2;
            case 'ERROR':
                return 3;
            default:
                return 0;
        }
    }

    allow(level: Level): boolean {
        const receivedLevelValue = this._getLevelValue(level)
        const minLevelValue = this._getLevelValue(this.minLevel)

        return receivedLevelValue >= minLevelValue
    }
}