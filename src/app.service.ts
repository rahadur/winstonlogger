import { Injectable } from '@nestjs/common';
import { WinstonLogger } from './logger/winston-logger.service';

@Injectable()
export class AppService {
  constructor(private log: WinstonLogger) {}

  getHello(): string {
    this.log.error(
      'Log from AppService',
      new Error('Error').stack,
      AppService.name,
    );
    return 'Hello World!';
  }
}
