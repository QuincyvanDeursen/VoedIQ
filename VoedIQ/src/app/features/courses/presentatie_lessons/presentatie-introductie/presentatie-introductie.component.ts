import { Component, OnInit } from '@angular/core';
import { QuizComponent } from '../../../../shared/components/quiz/quiz.component';
import { QuizQuestion } from '../../../../core/models/quiz-question';
import questions from '../../../../../assets/data/quiz/quiz_presentatie.json';

@Component({
  selector: 'app-presentatie-introductie',
  imports: [QuizComponent],
  templateUrl: './presentatie-introductie.component.html',
  styleUrl: './presentatie-introductie.component.css',
})
export class PresentatieIntroductieComponent implements OnInit {
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
