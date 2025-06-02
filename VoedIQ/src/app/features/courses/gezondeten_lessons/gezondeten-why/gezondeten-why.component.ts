import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-gezondeten-why',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './gezondeten-why.component.html',
  styleUrl: './gezondeten-why.component.css',
})
export class GezondetenWhyComponent {
  gezondEtenVraag = {
    question: 'Wat is géén hoofddoel van gezond eten?',
    options: [
      {
        label: 'A',
        text: 'Je energiek voelen',
        isCorrect: false,
        explanation:
          'Energie door de dag heen is juist een belangrijk gevolg van gezond eten.',
      },
      {
        label: 'B',
        text: 'Je gezondheid verbeteren',
        isCorrect: false,
        explanation: 'Dit is juist een van de kernpunten van gezond eten.',
      },
      {
        label: 'C',
        text: 'Gewicht verliezen',
        isCorrect: true,
        explanation:
          'Correct! Afvallen is géén hoofddoel van gezond eten. Gezond eten richt zich op het verbeteren van je algehele gezondheid en welzijn, niet op gewichtsverlies.',
      },
      {
        label: 'D',
        text: 'Je levenskwaliteit verhogen',
        isCorrect: false,
        explanation:
          'Gezond eten ondersteunt je welzijn en levenskwaliteit, dus dit is wél een doel.',
      },
    ],
  };
}
