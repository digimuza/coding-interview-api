/** @format */
// Implement the function below to store a candidate in memory

import { Candidate } from './candidate.model';
import { CandidateStore } from './candidate.store';

export const createCandidate = (candidate: Candidate): Candidate => {
  const candidateStore = CandidateStore.get();
  return candidateStore.createCandidate(candidate);
};

// 2. Search for candidates by skill (Exact Match)
//
// 3. Search for candidates by skill (Closest Match)
export const searchCandidatesBySkill1 = (skills: string[]): Candidate[] => {
  const candidateStore = CandidateStore.get();
  return Array.from(candidateStore.candidate.values()).filter(c =>
    skills.every(c => c.includes(c)),
  );
};

function* searchCandidateBySkill(skills: string[]) {
  const candidateStore = CandidateStore.get();
  const rec: Record<string, number> = {};
  for (const candidate of candidateStore.candidate.values()) {
    for (const skill of skills) {
      if (!candidate.skills.includes(skill)) continue;
      if (rec[candidate.id] == null) {
        rec[candidate.id] = 1;
        continue;
      }
      rec[candidate.id] += 1;
    }
  }

  const sortedScoreList = Object.entries(rec).sort((a, b) => {
    const fA = a[1];
    const fB = b[1];
    return fA - fB;
  });

  let initial: number | null = null;
  for (const [candidateId, score] of sortedScoreList) {
    if (initial == null) {
      initial = score;
    }
    const s = candidateStore.candidate.get(candidateId);
    if (s == null) throw new Error('Candidate was not found');
    yield s;
  }
}

export const searchCandidatesBySkill = (skills: string[]): Candidate[] => {
  return Array.from(searchCandidateBySkill(skills));
};
