import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-gezondeten-water',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './gezondeten-water.component.html',
  styleUrl: './gezondeten-water.component.css',
})
export class GezondetenWaterComponent {
  waterVraag = {
    question: 'Wat is een veelvoorkomend effect van te weinig water drinken?',
    options: [
      {
        label: 'A',
        text: 'Gewichtstoename door vocht',
        isCorrect: false,
        explanation:
          'Te weinig water drinken leidt juist niet tot gewichtstoename door vocht.',
      },
      {
        label: 'B',
        text: 'Verhoogde concentratie',
        isCorrect: false,
        explanation:
          'Te weinig water drinken verlaagt juist je concentratievermogen.',
      },
      {
        label: 'C',
        text: 'Vermoeidheid en hoofdpijn',
        isCorrect: true,
        explanation:
          'Correct! Te weinig vocht kan leiden tot vermoeidheid, hoofdpijn en verminderde concentratie.',
      },
      {
        label: 'D',
        text: 'Snellere stofwisseling',
        isCorrect: false,
        explanation:
          'Een tekort aan water vertraagt eerder je stofwisseling dan dat het versnelt.',
      },
    ],
  };
}
