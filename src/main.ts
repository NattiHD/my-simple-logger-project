import {Level} from "./interfaces";
import {ConsoleTransportClass} from "./concrete strategies/consoleTransportClass";
// import {TextFormatterClass} from "./concrete strategies/formatters/textFormatterClass";
import {MinLevelPolicyClass} from "./concrete strategies/policies/minLevelPolicyClass";
import {LoggerClass} from "./LoggerClass";
import {JsonFormatterClass} from "./concrete strategies/formatters/jsonFormatterClass";


// setting a level for the filtration test
const minLogLevel: Level = 'warn'


//creating strategy instances
const policy = new MinLevelPolicyClass(minLogLevel)
const formatter = new JsonFormatterClass()
const transport = new ConsoleTransportClass()

//creating the logger
const logger = new LoggerClass(policy, formatter, transport)

logger.info("info message - it won't be shown")
logger.debug("debug message - it won't be shown")
logger.warn("warn message - it will be shown")
logger.error("error message - it will be shown")

console.log(`\n Logger created with a minimum level of: ${minLogLevel.toUpperCase()}`)