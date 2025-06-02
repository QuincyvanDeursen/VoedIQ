import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-gezondeten-analyse',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './gezondeten-analyse.component.html',
  styleUrl: './gezondeten-analyse.component.css',
})
export class GezondetenAnalyseComponent {
  eetdagboekQuizVraag = {
    question:
      'Waarom is het bijhouden van een eetdagboek een goede stap om je eetpatroon te verbeteren?',
    options: [
      {
        label: 'A',
        text: 'Om jezelf streng te controleren',
        isCorrect: false,
        explanation:
          'Het doel van een eetdagboek is bewustwording, niet strengheid. Te streng zijn werkt vaak juist averechts.',
      },
      {
        label: 'B',
        text: 'Om inzicht te krijgen in je eetgewoonten en verbeterpunten',
        isCorrect: true,
        explanation:
          'Klopt! Een eetdagboek maakt duidelijk wat en waarom je eet. Zo kun je bewust betere keuzes maken.',
      },
      {
        label: 'C',
        text: 'Om obsessief calorieën te tellen',
        isCorrect: false,
        explanation:
          'Calorieën tellen kan nuttig zijn, maar het draait niet om obsessie. Het gaat om inzicht en balans.',
      },
      {
        label: 'D',
        text: 'Om je eetpatroon meteen helemaal te veranderen',
        isCorrect: false,
        explanation:
          'Het doel is juist geleidelijk verbeteren. Direct alles willen veranderen is vaak niet vol te houden.',
      },
    ],
  };
}
