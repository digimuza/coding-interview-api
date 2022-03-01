/** @format */
import { Controller, Put, Header, Body, Route, SuccessResponse } from 'tsoa';
import { BadRequestError } from '../errors';
import { Candidate } from './candidate.model';

@Route('')
export class CandidateController extends Controller {
  /**
   * Creates a new candidate
   * @param requestBody Candidate data that needs to be added.
   * @Header X-Api-Key the api key.
   * @returns Saved candidate data.
   */
  @SuccessResponse('201', 'Success')
  @Put('candidate')
  public async createCandidateByAdmin(
    @Header('X-Api-Key') apiKey: string,
    @Body() requestBody: Candidate,
  ): Promise<Candidate | undefined | null> {
    throw new BadRequestError('Test');

    // Store the candidate's profile via the candidate.service.ts here
    return Promise.resolve(null);
  }
}
