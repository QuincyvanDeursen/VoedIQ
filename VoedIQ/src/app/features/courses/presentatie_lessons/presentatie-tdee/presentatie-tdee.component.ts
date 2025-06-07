import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { TdeeCalculatorComponent } from '../../../../shared/components/tdee-calculator/tdee-calculator.component';
import { PalCalculatorComponent } from '../../../../shared/components/pal-calculator/pal-calculator.component';
import { BmrCalculatorComponent } from '../../../../shared/components/bmr-calculator/bmr-calculator.component';

@Component({
  selector: 'app-presentatie-tdee',
  imports: [
    QuizQuestionComponent,
    TdeeCalculatorComponent,
    PalCalculatorComponent,
    BmrCalculatorComponent,
  ],
  templateUrl: './presentatie-tdee.component.html',
  styleUrl: './presentatie-tdee.component.css',
})
export class PresentatieTdeeComponent {
  tdeeQuizVraag = {
    question: 'Wat geeft jouw totale dagelijkse energieverbruik (TDEE) weer?',
    options: [
      {
        label: 'A',
        text: 'De hoeveelheid calorieën die je eet tijdens een dieet',
        isCorrect: false,
        explanation:
          'TDEE gaat over je energieverbruik, niet over hoeveel je eet. Het bepaalt wat je lichaam dagelijks nodig heeft.',
      },
      {
        label: 'B',
        text: 'Het aantal calorieën dat je lichaam in rust verbruikt',
        isCorrect: false,
        explanation:
          'Dat is je ruststofwisseling (BMR), niet je totale energieverbruik inclusief activiteit.',
      },
      {
        label: 'C',
        text: 'De energie die je lichaam dagelijks verbruikt, inclusief alle activiteiten',
        isCorrect: true,
        explanation:
          'Correct! Je TDEE bestaat uit je ruststofwisseling (BMR) én de energie die je verbruikt met dagelijkse activiteiten.',
      },
      {
        label: 'D',
        text: 'De maximale hoeveelheid calorieën die je mag eten zonder aan te komen',
        isCorrect: false,
        explanation:
          'TDEE is een schatting van je energieverbruik, geen vaste bovengrens. Het vormt een basis voor het bepalen van je voedingsinname.',
      },
    ],
  };
}
