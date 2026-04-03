import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

type SuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
};

@Injectable()
export class TransformResponseInterceptor<T> implements NestInterceptor<T, SuccessResponse<T>> {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<SuccessResponse<T>> {
    return next.handle().pipe(
      map((data: T) => ({
        success: true,
        message: 'Request successful',
        data,
      })),
    );
  }
}
