/**
 * @format
 */
/* eslint-disable max-classes-per-file */

import { StatusCodes } from 'http-status-codes';

class StandardizedError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequestError) {
      return StatusCodes.BAD_REQUEST;
    }
    if (this instanceof ForbiddenError) {
      return StatusCodes.FORBIDDEN;
    }
    if (this instanceof InternalServerError) {
      return StatusCodes.INTERNAL_SERVER_ERROR;
    }
    if (this instanceof NotFoundError) {
      return StatusCodes.NOT_FOUND;
    }
    if (this instanceof UnauthorizedError) {
      return StatusCodes.UNAUTHORIZED;
    }
    return 500;
  }

  getName() {
    if (this instanceof BadRequestError) {
      return 'BadRequest';
    }
    if (this instanceof ForbiddenError) {
      return 'Forbidden';
    }
    if (this instanceof InternalServerError) {
      return 'InternalServerError';
    }
    if (this instanceof NotFoundError) {
      return 'NotFound';
    }
    if (this instanceof UnauthorizedError) {
      return 'Unauthorized';
    }
    return 'Error';
  }
}
class BadRequestError extends StandardizedError {}
class ForbiddenError extends StandardizedError {}
class InternalServerError extends StandardizedError {}
class NotFoundError extends StandardizedError {}
class UnauthorizedError extends StandardizedError {}

export {
  StandardizedError,
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
};
