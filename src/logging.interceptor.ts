import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const method: string = req.method;
    const url: string = req.url;
    const body: unknown = req.body;
    const query: unknown = req.query;
    const params: unknown = req.params;
    this.logger.log(
      `Request ${method} ${url} params=${JSON.stringify(params)} query=${JSON.stringify(query)} body=${JSON.stringify(body)}`,
    );
    const started = Date.now();
    return next.handle().pipe(
      tap(() => {
        const elapsed = Date.now() - started;
        this.logger.log(`Response ${method} ${url} ${elapsed}ms`);
      }),
    );
  }
}
