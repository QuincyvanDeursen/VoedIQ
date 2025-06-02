import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-gezondeten-culprit',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './gezondeten-culprit.component.html',
  styleUrl: './gezondeten-culprit.component.css',
})
export class GezondetenCulpritComponent {
  vezelsZoutSuikerVraag = {
    question:
      'Wat is een gezonde gewoonte als het gaat om vezels, zout en suiker?',
    options: [
      {
        label: 'A',
        text: 'Volkorenbrood eten, je eten op smaak brengen met kruiden en frisdrank vervangen door water',
        isCorrect: true,
        explanation:
          'Correct! Dit zijn stuk voor stuk gezonde keuzes die bijdragen aan een betere darmgezondheid, minder zoutinname en lagere suikerconsumptie.',
      },
      {
        label: 'B',
        text: 'Witbrood eten, extra zout toevoegen en light frisdrank drinken',
        isCorrect: false,
        explanation:
          'Light frisdrank bevat minder suiker, maar witbrood en extra zout zijn geen gezonde keuzes.',
      },
      {
        label: 'C',
        text: 'Vezels vermijden, zout aanvullen met supplementen en suiker schrappen uit fruit',
        isCorrect: false,
        explanation:
          'Vezels zijn juist essentieel. Zout aanvullen met supplementen is onnodig en suiker uit fruit is niet hetzelfde als toegevoegde suiker.',
      },
      {
        label: 'D',
        text: 'Alleen letten op calorieën, niet op vezels, zout of suiker',
        isCorrect: false,
        explanation:
          'Calorieën zijn belangrijk, maar de kwaliteit van wat je eet telt minstens zo zwaar. Vezels, zout en suiker hebben elk hun eigen invloed op je gezondheid.',
      },
    ],
  };
}
