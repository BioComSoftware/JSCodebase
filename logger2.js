/**
 * @name: logger2
 * @description: Manages logging setup for consistency amongst a project
 * @usage: logger = require('./logger2')(); logger.log('debug',"Loading file: '%s' ... %s", "/path/to/filename", "OK")  
 * @param: log_level = Set the log level that will be sent to screen/logfile. Based on the "winston" log levels. DEFAULT: warn
 * @param: logfile = FULL PATH to logfile. DEFAULT: '/dev/null' (no logging to file if not specified).
 * @param: screendump = If "true" all logging lines will ALSO be dumped to STDOUT. DEFAULT: "false".
 * @author: Mike Rightmire
 * @email:  Mike.Rightmire@Biocomsoftware.com
 * @copyright: BiocomSoftware
 * @version: 0.9.0.0
 * @Licensing LGPL
*/
const { createLogger, transports } = require("winston");
let   { format }                   = require("winston");
let logger;
let log_level;
let logfile; 
let screendump;

/* Winston log levels
 * 
 * error: 0,
 * warn: 1,
 * info: 2,
 * verbose: 3, 
 * debug: 4,
 * silly: 5
 */ 

function formatParams(info) {
	  const { timestamp, level, message, ...args } = info;
	  const ts = timestamp.slice(0, 19).replace("T", " ");
	  return `${ts} ${level}: ${message} ${Object.keys(args).length
	    ? JSON.stringify(args, "", "")
	    : ""}`;
	}

//Set format default here
format = format.combine(
		 format.splat(),
	  	 format.colorize(),
	  	 format.timestamp(),
	  	 format.align(),
	  	 format.printf(formatParams)
		);


// === main ==================================================================
module.exports = function() { 

		/* Set logging. Can be set by command line or config file */
		var log_level  = ( process.env.log_level  != null ? process.env.log_level  : process.argv["log_level"] )  // Can end as undefined
		var logfile    = ( process.env.logfile    != null ? process.env.logfile    : process.argv["logfile"]   )  // Can end as undefined
		var screendump = ( process.env.screendump != null ? process.env.screendump : process.argv["screendump"])  // Can end as undefined

		
		// Put a check in here to ensure "formatting" is a format object
		if ( typeof formatting !== 'undefined') { format = formatting; }
		
		
		/* Create logger object */
		logger = createLogger({
					level : log_level,
					format: format,
					transports: [
					// Start with everything going to dev null...just to satisfy
					// Winston's requirement for at least one transport.
					// Add more later 
				    new transports.File({ filename: '/dev/null', level: 'error' }),
				  ]
				});
		

		/* Add transports based on environment */
		// File
		if ( typeof logfile !== 'undefined' ) { 
			// put a file check in here
			logger.add(new transports.File({ filename: logfile, format: format }) )
		}

		// Screendump
		if ( typeof screendump !== 'undefined' || screendump != false) { 
			logger.add(new transports.Console({ format: format }) );
		}
		return logger;
 		
};