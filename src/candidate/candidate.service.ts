/** @format */
// Implement the function below to store a candidate in memory

import { Candidate } from './candidate.model';

const inMemoerDb: Candidate[] = [];

export const createCandidate = (candidate: Candidate): Candidate => {
  // 1. Store the candidate in memory
  throw new Error('not implemented');
};

export const searchCandidatesBySkill = (skill: string): Candidate[] => {
  // 2. Search for candidates by skill (Exact Match)

  // 3. Search for candidates by skill (Closest Match)
  throw new Error('not implemented');
};
