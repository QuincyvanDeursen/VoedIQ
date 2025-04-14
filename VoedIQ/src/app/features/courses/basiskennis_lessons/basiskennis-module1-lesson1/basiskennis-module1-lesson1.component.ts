import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-basiskennis-module1-lesson1',
  imports: [QuizQuestionComponent],
  templateUrl: './basiskennis-module1-lesson1.component.html',
  styleUrl: './basiskennis-module1-lesson1.component.css',
})
export class BasiskennisModule1Lesson1Component {
  voedingsvraag = {
    question:
      'Wat zou er kunnen gebeuren als je elke dag alleen maar appels eet?',
    options: [
      {
        label: 'A',
        text: 'Je krijgt niet alle voedingsstoffen binnen die het lichaam nodig heeft.',
        isCorrect: true,
        explanation:
          'Geen enkel voedingsmiddel bevat alle voedingsstoffen die het lichaam nodig heeft. Het is dus niet verstandig om alleen één voedingsmiddel te eten.',
      },
      {
        label: 'B',
        text: 'Het zou geen probleem zijn, want appels zijn gezond.',
        isCorrect: false,
        explanation:
          'Hoewel een appel veel vitaminen bevat, bevat het niet alle voedingstoffen die het lichaam nodig heeft. Het is dus niet verstandig om alleen één voedingsmiddel te eten.',
      },
    ],
  };
}
