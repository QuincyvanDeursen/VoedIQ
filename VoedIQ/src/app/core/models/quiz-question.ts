import { QuizOption } from './quiz-option';

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}
