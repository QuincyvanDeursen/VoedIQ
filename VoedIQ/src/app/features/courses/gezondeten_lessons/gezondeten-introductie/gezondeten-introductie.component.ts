import { Component } from '@angular/core';
import { QuizComponent } from '../../../../shared/components/quiz/quiz.component';
import questions from '../../../../../assets/data/quiz/quiz_gezondeten.json';
import { QuizQuestion } from '../../../../core/models/quiz-question';
@Component({
  selector: 'app-gezondeten-introductie',
  imports: [QuizComponent],
  templateUrl: './gezondeten-introductie.component.html',
})
export class GezondetenIntroductieComponent {
  courseTitle: string | null = null;
  userName: string = '';
  questions: QuizQuestion[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getUserName(); // Verkrijg de gebruikersnaam uit local storage
    this.loadCourseQuiz(); // Laad de quiz op basis van de courseTitle
  }

  //get userName from local storage
  private getUserName() {
    this.userName = localStorage.getItem('userName') || '';
  }

  loadCourseQuiz() {
    if (this.courseTitle === '') {
      console.error('Course title is empty. Cannot load quiz.');
      return;
    }

    this.questions = questions;
  }
  //get userEmail from local storage
}
