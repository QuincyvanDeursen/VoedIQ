import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-afvallen-module1-lesson1',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './afvallen-module1-lesson1.component.html',
  styleUrl: './afvallen-module1-lesson1.component.css',
})
export class AfvallenModule1Lesson1Component {
  energiebalansVraag = {
    question:
      'Vaak hoor je: “Ik eet zo weinig maar ik val nog steeds niet af.” Welke stelling is waar?',
    options: [
      {
        label: 'A',
        text: 'De persoon is te ongeduldig.',
        isCorrect: false,
        explanation:
          'Ongeduld speelt zeker een rol, maar is niet de enige reden. Antwoord D is juist.',
      },
      {
        label: 'B',
        text: 'De persoon meet mogelijk progressie fout.',
        isCorrect: false,
        explanation:
          'Klopt. Voortgang wordt vaak verkeerd beoordeeld, bijvoorbeeld door alleen op gewicht te letten. Antwoord D is juist.',
      },
      {
        label: 'C',
        text: 'De persoon onderschat zijn calorie-inname of overschat zijn behoefte.',
        isCorrect: false,
        explanation:
          'Dit komt veel voor: kleine hapjes, vloeibare calorieën en portiegroottes worden vaak onderschat. Antwoord D is juist',
      },
      {
        label: 'D',
        text: 'Alles is juist.',
        isCorrect: true,
        explanation:
          'Correct! Afvallen is zelden lineair. Schommelingen zijn normaal, en onderschatting van inname of verkeerde beoordeling van progressie komt vaak voor.',
      },
    ],
  };
}
