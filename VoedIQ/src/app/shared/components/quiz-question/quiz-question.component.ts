import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { QuizQuestion } from '../../../core/models/quiz-question';
import { QuizOption } from '../../../core/models/quiz-option';

@Component({
  selector: 'app-quiz-question',
  imports: [CommonModule],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.css',
})
export class QuizQuestionComponent implements OnChanges {
  @Input() id = 0;
  @Input() explanation = true;
  @Input() question!: QuizQuestion;
  @Output() answerGiven = new EventEmitter<boolean>();

  selectedOption: QuizOption | null = null;
  correctAnswerLabel = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question'] && this.question?.options) {
      const correct = this.question.options.find((option) => option.isCorrect);
      this.correctAnswerLabel = correct ? correct.label : '';
    }
  }

  choose(option: QuizOption) {
    if (this.selectedOption) return;
    this.selectedOption = option;
    this.answerGiven.emit(option.isCorrect);
  }
}
