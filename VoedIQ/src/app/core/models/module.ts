import { Lesson } from './lesson';

export interface Module {
  title: string;
  lessons: Lesson[];
  route: string;
  completion: boolean;
}
