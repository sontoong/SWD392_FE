export interface Question {
  question: string;
  answer: string;
}

export interface Applicant {
  id: string;
  projectId: string;
  candidateName: string;
  candidateId: string;
  date: number;
  questions?: Question[];
  money: number;
  time: number;
}
