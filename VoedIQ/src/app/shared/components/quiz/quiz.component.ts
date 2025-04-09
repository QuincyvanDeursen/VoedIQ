import { Component, Input } from '@angular/core';
import { QuizQuestionComponent } from '../quiz-question/quiz-question.component';
import { QuizQuestion } from '../../../core/models/quiz-question';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [QuizQuestionComponent, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  @Input() questions: QuizQuestion[] = [];
  @Input() maxHeightVh = 80;

  answers: { [index: number]: boolean } = {};

  onAnswer(index: number, isCorrect: boolean) {
    if (!(index in this.answers)) {
      this.answers[index] = isCorrect;

      if (this.isComplete) {
        setTimeout(() => {
          const el = document.getElementById('result');
          el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }

  get totalAnswered(): number {
    return Object.keys(this.answers).length;
  }

  get totalCorrect(): number {
    return Object.values(this.answers).filter((ans) => ans).length;
  }

  get isComplete(): boolean {
    return this.totalAnswered === this.questions.length;
  }
}
