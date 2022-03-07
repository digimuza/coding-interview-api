/** @format */
import { Controller, Put, Body, Route, SuccessResponse, Query, Get } from 'tsoa';
import { BadRequestError, NotFoundError } from '../errors';
import { Candidate } from './candidate.model';
import { createCandidate } from './candidate.service';

@Route('')
export class CandidateController extends Controller {
  /**
   * Creates a new candidate
   * @param requestBody Candidate data that needs to be added.
   * @returns Saved candidate data.
   */
  @SuccessResponse('201', 'Success')
  @Put('candidate')
  public createCandidateByAdmin(@Body() requestBody: Candidate): Candidate | undefined | null {
    throw new Error('Not implemented');
    // createCandidate();
  }

  // 2. Search for candidates
}
