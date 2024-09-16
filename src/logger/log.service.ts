import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Log } from './log.entity';

@Injectable()
export class LogService {
  constructor(@InjectRepository(Log) private repo: Repository<Log>) {}

  create(log: any) {
    this.repo.save(log);
  }
}
