export interface Question {
  question: string;
  answer: string;
}

export interface Applicant {
  id: string;
  projectId: string;
  name: string;
  date: number;
  questions?: Question[];
  money: number;
  time: number;
}
