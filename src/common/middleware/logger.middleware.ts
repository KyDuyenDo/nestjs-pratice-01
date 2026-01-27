import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger(LoggerMiddleware.name);

    use(req: Request, res: Response, next: NextFunction) {
        const logger = {
            param: req.params,
            query: req.query,
            body: req.body,
            header: req.header,
        };
        this.logger.log(logger);
        next();
    }
}
