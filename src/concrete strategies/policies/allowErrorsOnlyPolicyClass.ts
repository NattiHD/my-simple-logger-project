import {Level, LevelPolicy} from "../../interfaces";

export class AllowErrorsOnlyPolicyClass implements LevelPolicy{
    allow(level: Level): boolean {
        return level === 'error';
    }
}