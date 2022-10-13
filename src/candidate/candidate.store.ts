/** @format */

import { Candidate } from './candidate.model';

export class CandidateStore {
  static store: CandidateStore | null;

  static get() {
    if (CandidateStore.store != null) return CandidateStore.store;
    CandidateStore.store = new CandidateStore();
    return CandidateStore.store;
  }
  candidate = new Map<string, Candidate>();

  // [skill, CandidateId]
  skill = new Map<string, string>();

  createCandidate(candidate: Candidate) {
    this.candidate.set(candidate.id, candidate);
    for (const x of candidate.skills) {
      this.skill.set(x, candidate.id);
    }

    return candidate;
  }
}
