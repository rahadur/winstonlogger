import * as TransportStream from 'winston-transport';
import { LogService } from './log.service';

class DatabaseTransport extends TransportStream {
  constructor(
    private logService: LogService,
    opts?: TransportStream.TransportStreamOptions,
  ) {
    super(opts);
  }

  log(info: any, callback: () => void): any {
    setImmediate(() => this.emit('logged', info));
    this.save(info);
    callback();
  }

  private save(info: any): void {
    let trace = null;
    let context = null;
    const splat = info[Symbol.for('split')];
    if (info.level === 'error' && splat && splat?.length > 0) {
      trace = splat[0]?.trace;
      context = splat[0]?.context;
    } else {
      context = info?.context;
    }

    this.logService.create({
      level: info.level,
      message: info.message,
      context: info?.context,
      payload: info?.payload,
      stack: info?.stack,
      timestamp: info.timestamp,
    });
  }
}

export default DatabaseTransport;
