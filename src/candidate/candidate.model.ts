/** @format */

/** Model of the candidate */
export type Candidate = {
  /** ID */
  id: string;
  /** The candidate's full name */
  name: string;
  /** An array of the candidate's skills */
  skills: Array<string>;
};
