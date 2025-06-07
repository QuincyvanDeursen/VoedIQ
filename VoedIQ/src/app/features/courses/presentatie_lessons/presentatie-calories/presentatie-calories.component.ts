import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-presentatie-calories',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './presentatie-calories.component.html',
  styleUrl: './presentatie-calories.component.css',
})
export class PresentatieCaloriesComponent {}
