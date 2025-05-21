import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-afvallen-progress',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './afvallen-progress.component.html',
})
export class AfvallenProgressComponent {
  progressieVraag = {
    question:
      'Wat is de beste manier om echte vooruitgang te meten tijdens het afvallen?',
    options: [
      {
        label: 'A',
        text: 'Elke dag op de weegschaal staan en alleen naar het gewicht kijken.',
        isCorrect: false,
        explanation:
          'Dagelijkse gewichtsschommelingen kunnen misleidend zijn. Het is beter om het gewicht op een vaste manier te meten en meerdere methoden te gebruiken.',
      },
      {
        label: 'B',
        text: 'Alleen metingen van je taille, heupen en borst gebruiken.',
        isCorrect: false,
        explanation:
          'Metingen zijn nuttig, maar het is beter om dit te combineren met andere methoden zoals foto’s en weegmomenten.',
      },
      {
        label: 'C',
        text: 'Regelmatig foto’s maken, meten met een meetlint en het gewicht wekelijks gemiddeld meten.',
        isCorrect: true,
        explanation:
          'Door deze drie methoden te combineren krijg je een veel completer beeld van je voortgang.',
      },
      {
        label: 'D',
        text: 'Je kledingkast beoordelen en alleen op gevoel vertrouwen.',
        isCorrect: false,
        explanation:
          'Hoewel kleding een goede indicator kan zijn, is het subjectief en niet altijd betrouwbaar zonder andere meetmethoden.',
      },
    ],
  };
}
