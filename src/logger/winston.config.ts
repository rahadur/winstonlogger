import { format, createLogger, transports } from 'winston';
import { DatabaseTransportWrapper } from './database-transport-wrapper.service';

export class WinstonConfig {
  constructor(private databaseTransport: DatabaseTransportWrapper) {}

  createLogger() {
    const customFormat = format.printf(
      ({ timestamp, level, stack, message, context }) => {
        context = context ? `[${context}]` : '';
        return `${timestamp}  ${level.toUpperCase().padStart(7)} ${context} ${message} ${stack || ''}`;
      },
    );

    const devLogger = {
      level: 'silly',
      format: format.combine(
        format.timestamp({ format: 'DD/MM/YYYY hh:mm:ss A' }),
        format.errors({ stack: true }),
        format.json(),
        customFormat,
      ),
      transports: [
        new transports.Console({
          level: 'silly',
          format: format.colorize(),
        }),
        this.databaseTransport.transport,
      ],
    };

    return createLogger(devLogger);
  }
}
