import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-basiskennis-target',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './basiskennis-target.component.html',
  styleUrl: './basiskennis-target.component.css',
})
export class BasiskennisTargetComponent {
  afvallenVraag = {
    question:
      'Kun je afvallen door alleen minder te eten, ongeacht de kwaliteit van je voeding?',
    options: [
      {
        label: 'A',
        text: 'Ja, afvallen draait puur om minder calorieën binnenkrijgen dan je nodig hebt.',
        isCorrect: true,
        explanation:
          'Afvallen draait om een negatieve energiebalans. Gezonde voeding is echter belangrijk voor je algemene gezondheid en helpt bijvoorbeeld bij spierbehoud, verzadiging en energieniveau.',
      },
      {
        label: 'B',
        text: 'Nee, je kunt niet afvallen zonder gezonde voeding.',
        isCorrect: false,
        explanation:
          'Het is wel degelijk mogelijk om af te vallen met ongezonde voeding als je minder calorieën eet dan je verbruikt. Toch is dit niet aan te raden voor je gezondheid.',
      },
    ],
  };
}
