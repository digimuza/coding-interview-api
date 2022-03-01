/** @format */
import { Express, NextFunction, Response } from 'express';
import { StandardizedError } from './Errors';

export default (app: Express) => {
  app.use((error: Error, request, response: Response, next: NextFunction) => {
    if (error) {
      response.contentType('application/json');
      if (error instanceof StandardizedError) {
        response.statusCode = error.getCode();
        response.end(
          JSON.stringify({
            status: error.getCode(),
            name: error.getName(),
            message: error.message,
          }),
        );
      } else {
        // TSOA Error
        console.log(error);
        const err: any = error;
        response.statusCode = err.status;
        response.end(
          JSON.stringify({
            status: err.status,
            name: 'HTTP Error',
            message: err.fields || 'Something went wrong.',
          }),
        );
      }
    }
    next();
  });
};
