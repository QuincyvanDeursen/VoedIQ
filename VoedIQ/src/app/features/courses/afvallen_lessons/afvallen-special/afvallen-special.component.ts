import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-afvallen-special',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './afvallen-special.component.html',
})
export class AfvallenSpecialComponent {
  gelegenheidVraag = {
    question:
      'Welke van de onderstaande manieren kunnen helpen om met sociale gelegenheden om te gaan tijdens het afvallen?',
    options: [
      {
        label: 'A',
        text: 'Je kiest bewust voor kleinere porties en houdt rekening met je doelen.',
        isCorrect: true,
        explanation:
          'Dit helpt je om te genieten én koers te houden — een slimme strategie voor veel mensen.',
      },
      {
        label: 'B',
        text: 'Je laat je dieet even helemaal los en geniet volop van het moment.',
        isCorrect: true,
        explanation:
          'Ook dit is prima, zolang je het bewust doet en weet dat één dag je resultaat niet verpest.',
      },
      {
        label: 'C',
        text: 'Je slaat zulke gelegenheden liever helemaal over.',
        isCorrect: false,
        explanation:
          'Dat kan werken, maar is vaak moeilijk vol te houden en minder sociaal. Flexibiliteit werkt duurzamer. A & B Zijn juist',
      },
    ],
  };
}
