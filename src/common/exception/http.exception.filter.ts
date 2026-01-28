import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const exceptionResponse = exception.getResponse() as {
      message: string;
      statusCode: number;
    };

    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
      message: exceptionResponse.message,
    });
  }
}
