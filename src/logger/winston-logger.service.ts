import { Injectable, LoggerService } from '@nestjs/common';
import { Logger } from 'winston';

@Injectable()
export class WinstonLogger implements LoggerService {
  constructor(private logger: Logger) {}

  log(message: any, context?: string) {
    this.logger.info(message, { context });
  }

  error(message: any, stack?: string, context?: string) {
    this.logger.error(message, { stack, context });
  }

  warn(message: any, context?: string) {
    this.logger.warn(message, { context });
  }

  debug(message: any, context?: string) {
    this.logger.warn(message, { context });
  }

  verbose(message: any, payload?: string, context?: string) {
    this.logger.verbose(message, { payload, context });
  }
}
