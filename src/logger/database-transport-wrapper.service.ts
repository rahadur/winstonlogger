import { Injectable } from '@nestjs/common';
import DatabaseTransport from './database.transport';
import { LogService } from './log.service';

@Injectable()
export class DatabaseTransportWrapper {
  transport: DatabaseTransport;

  constructor(private logService: LogService) {
    this.transport = new DatabaseTransport(logService);
  }
}
