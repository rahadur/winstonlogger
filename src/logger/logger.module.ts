import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Log } from './log.entity';
import { LogService } from './log.service';
import { DatabaseTransportWrapper } from './database-transport-wrapper.service';
import { WinstonConfig } from './winston.config';
import { WinstonLogger } from './winston-logger.service';

// https://endertech.com/blog/how-to-add-a-winston-logger-to-your-nestjs-project-that-saves-logs-to-the
@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Log])],
  providers: [
    LogService,
    DatabaseTransportWrapper,
    {
      provide: 'WINSTON',
      useFactory: (customTransport: DatabaseTransportWrapper) => {
        const winstonConfig = new WinstonConfig(customTransport);
        return winstonConfig.createLogger();
      },
      inject: [DatabaseTransportWrapper],
    },
    {
      provide: WinstonLogger,
      useFactory: (winston) => new WinstonLogger(winston),
      inject: ['WINSTON'],
    },
  ],
  exports: ['WINSTON', WinstonLogger],
})
export class LoggerModule {}
