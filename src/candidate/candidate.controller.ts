/** @format */
import { Controller, Put, Body, Route, SuccessResponse, Query, Get } from 'tsoa';
import { BadRequestError, NotFoundError } from '../errors';
import { Candidate } from './candidate.model';
import { createCandidate, searchCandidatesBySkill } from './candidate.service';

@Route('candidate')
export class CandidateController extends Controller {
  /**
   * Creates a new candidate
   * @param requestBody Candidate data that needs to be added.
   * @returns Saved candidate data.
   */
  @SuccessResponse('201', 'Success')
  @Put()
  public createCandidateByAdmin(@Body() requestBody: Candidate): Candidate | undefined | null {
    throw new Error('Not implemented');
    // createCandidate();
  }

  @SuccessResponse('200', 'Success')
  @Get('search')
  public searchCandidatesBySkill(@Query('skills') skills: string[]): Candidate[] {
    throw new Error('Not implemented');
    // searchCandidatesBySkill();
  }

  // throw new BadRequestError('something is wrong with the requst')
  // throw new NotFoundError('something is wrong with the requst')
}
