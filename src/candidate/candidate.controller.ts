/** @format */
import { Controller, Put, Body, Route, SuccessResponse, Query, Get } from 'tsoa';
import { BadRequestError } from '../errors';
import { Candidate } from './candidate.model';
import { createCandidate, searchCandidatesBySkill } from './candidate.service';

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
    throw new BadRequestError('Test');
    // createCandidate();
  }

  /**
   * Searches for the candidate(s) that best match the provided skills
   * @param query A comma separated list of skills to search for
   * @returns The candidate(s) that best match the provided skills
   */
  @SuccessResponse('200', 'Success')
  @Get('candidate')
  public searchCandidatesBySkill(@Query() query: string): Candidate[] {
    throw new BadRequestError('Test');
    // searchCandidatesBySkill();
  }
}
