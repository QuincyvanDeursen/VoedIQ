import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentatie-gezond-eten',
  imports: [InfoBlockComponent, QuizQuestionComponent, CommonModule],
  templateUrl: './presentatie-gezond-eten.component.html',
  styleUrl: './presentatie-gezond-eten.component.css',
})
export class PresentatieGezondEtenComponent {
  wortelKeuze: 'wortel' | 'hamburger' | null = null;
  gezondEtenVraag = {
    question: 'Wat klopt het meest met de definitie van gezond eten?',

    options: [
      {
        label: 'A',
        text: 'Alleen maar natuurlijke producten eten',
        isCorrect: false,
        explanation:
          'Natuurlijke producten kunnen onderdeel zijn van een gezond dieet, maar het draait vooral om balans, variatie en voedingswaarde.',
      },
      {
        label: 'B',
        text: 'Nooit suiker, zout, vet, en koolhydraten eten',
        isCorrect: false,
        explanation:
          'Het gaat om de hoeveelheid en het totale voedingspatroon. Vet is zelfs essentieel voor je lichaam, net als eiwitten.',
      },
      {
        label: 'C',
        text: 'Een gebalanceerd eetpatroon met voldoende voedingsstoffen over de week',
        isCorrect: true,
        explanation:
          'Correct! Gezond eten draait om balans, variatie en voldoende voedingsstoffen over een langere periode. Dat maakt één maaltijd niet gezond of ongezond, maar je totale eetpatroon.',
      },
      {
        label: 'D',
        text: 'Producten eten met zo min mogelijk calorieën',
        isCorrect: false,
        explanation:
          'Weinig calorieën betekent niet automatisch gezond. Je lichaam heeft ook vetten, eiwitten en andere voedingsstoffen nodig.',
      },
    ],
  };
}
