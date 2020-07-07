import winston, { format } from "winston";

const { combine, colorize, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `$[${level}] [${timestamp}] ${message.toLowerCase()}`;
});

export const logger = winston.createLogger({
  format: combine(format.timestamp(), colorize({ all: true }), customFormat),
  transports: [new winston.transports.Console()],
});
