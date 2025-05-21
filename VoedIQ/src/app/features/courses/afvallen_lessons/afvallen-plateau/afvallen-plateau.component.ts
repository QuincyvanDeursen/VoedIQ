import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-afvallen-plateau',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './afvallen-plateau.component.html',
})
export class AfvallenPlateauComponent {
  plateauVraag = {
    question:
      'Wat is een effectieve manier om door een plateau te breken tijdens het afvallen?',
    options: [
      {
        label: 'A',
        text: 'Je training tijdelijk helemaal pauzeren zodat je lichaam herstelt.',
        isCorrect: false,
        explanation:
          'Rust is belangrijk, maar volledige stilstand vertraagt je voortgang. Kleine aanpassingen zijn effectiever.',
      },
      {
        label: 'B',
        text: 'Je calorie-inname herberekenen en eventueel iets verlagen.',
        isCorrect: true,
        explanation:
          'Je lichaam verbrandt minder calorieën na gewichtsverlies. Een nieuw tekort kan helpen de vetverbranding te herstarten.',
      },
      {
        label: 'C',
        text: 'Vaker wegen, zodat je kunt bijhouden of het plateau doorbroken wordt.',
        isCorrect: false,
        explanation:
          'Vaker wegen helpt je inzicht, maar lost het probleem niet op. Actieve aanpassingen in gedrag of voeding zijn nodig.',
      },
    ],
  };
}
