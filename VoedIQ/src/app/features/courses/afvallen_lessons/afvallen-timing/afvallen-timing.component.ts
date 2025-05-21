import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-afvallen-timing',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './afvallen-timing.component.html',
  styleUrl: './afvallen-timing.component.css',
})
export class AfvallenTimingComponent {
  timingVraag = {
    question:
      'Wat is volgens jou het beste moment om een eiwitrijke maaltijd te eten?',
    options: [
      {
        label: 'A',
        text: 'Alleen ‘s avonds',
        isCorrect: false,
        explanation:
          'Eiwit alleen ’s avonds eten is minder effectief dan een verdeling over de dag. Je lichaam heeft op meerdere momenten eiwitten nodig.',
      },
      {
        label: 'B',
        text: 'Bij elke maaltijd over de dag verdeeld',
        isCorrect: true,
        explanation:
          'Het is optimaal om je eiwitinname te spreiden. Zo ondersteun je spierbehoud en blijf je langer verzadigd.',
      },
      {
        label: 'C',
        text: 'Enkel voor de training',
        isCorrect: false,
        explanation:
          'Voor een training eiwitten eten kan nuttig zijn, maar het is niet voldoende als je de rest van de dag niets neemt.',
      },
    ],
  };
}
