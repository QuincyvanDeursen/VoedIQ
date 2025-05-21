import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { BmrCalculatorComponent } from '../../../../shared/components/bmr-calculator/bmr-calculator.component';
import { PalCalculatorComponent } from '../../../../shared/components/pal-calculator/pal-calculator.component';
import { TdeeCalculatorComponent } from '../../../../shared/components/tdee-calculator/tdee-calculator.component';

@Component({
  selector: 'app-afvallen-tdee',
  imports: [
    QuizQuestionComponent,
    BmrCalculatorComponent,
    PalCalculatorComponent,
    TdeeCalculatorComponent,
  ],
  templateUrl: './afvallen-tdee.component.html',
  styleUrl: './afvallen-tdee.component.css',
})
export class AfvallenTdeeComponent {
  tdeeQuizVraag = {
    question:
      'Je eet op een dag 2.000 kcal, en je TDEE blijkt 2.400 kcal te zijn. Wat gebeurt er dan met je gewicht op lange termijn?',
    options: [
      {
        label: 'A',
        text: 'Je komt aan',
        isCorrect: false,
        explanation:
          'Je eet minder dan je nodig hebt, dus aankomen is niet logisch. Zie les 1.1 voor de principes van gewichtsverlies.',
      },
      {
        label: 'B',
        text: 'Je blijft stabiel',
        isCorrect: false,
        explanation:
          'Je blijft alleen stabiel als je eet wat je verbruikt – dat is hier niet het geval. Zie les 1.1 voor de principes van gewichtsverlies.',
      },
      {
        label: 'C',
        text: 'Je valt af',
        isCorrect: true,
        explanation:
          'Je eet dagelijks 400 kcal minder dan je verbruikt. Dit zorgt voor gewichtsverlies bij voldoende consistentie. Je hebt het fundament van gewichtsverlies goed begrepen.',
      },
    ],
  };
}
