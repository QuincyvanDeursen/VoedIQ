import { Component } from '@angular/core';
import { MicronutrientCalculatorComponent } from '../../../../shared/components/micronutrient-calculator/micronutrient-calculator.component';
import { MacronutrientCalculatorComponent } from '../../../../shared/components/macronutrient-calculator/macronutrient-calculator.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-gezondeten-macromicro',
  imports: [
    MicronutrientCalculatorComponent,
    MacronutrientCalculatorComponent,
    QuizQuestionComponent,
  ],
  templateUrl: './gezondeten-macromicro.component.html',
  styleUrl: './gezondeten-macromicro.component.css',
})
export class GezondetenMacromicroComponent {
  macroMicroQuizVraag = {
    question:
      'Wat is het belangrijkste verschil tussen macro- en micronutriënten?',
    options: [
      {
        label: 'A',
        text: 'Micronutriënten leveren energie, macronutriënten niet',
        isCorrect: false,
        explanation:
          'Dat is omgekeerd: macronutriënten leveren energie, micronutriënten niet.',
      },
      {
        label: 'B',
        text: 'Macronutriënten zijn nodig in grote hoeveelheden en leveren energie, micronutriënten zijn nodig in kleine hoeveelheden en ondersteunen lichaamsfuncties',
        isCorrect: true,
        explanation:
          'Correct! Macronutriënten zoals koolhydraten, vetten en eiwitten leveren energie. Micronutriënten zoals vitaminen en mineralen zijn essentieel voor lichaamsprocessen, maar leveren geen energie.',
      },
      {
        label: 'C',
        text: 'Micronutriënten zijn alleen belangrijk tijdens het sporten',
        isCorrect: false,
        explanation:
          'Micronutriënten zijn altijd belangrijk, ongeacht je mate van lichamelijke activiteit.',
      },
      {
        label: 'D',
        text: 'Macronutriënten bestaan uit vitamines en mineralen',
        isCorrect: false,
        explanation: 'Vitamines en mineralen zijn juist micronutriënten.',
      },
    ],
  };
}
