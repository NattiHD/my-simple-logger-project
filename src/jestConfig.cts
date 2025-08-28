//download jest library with ts format
//and config it on CommonJS Modules at end file .cts
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/tests/**/*.test.ts"],
};