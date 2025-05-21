import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-afvallen-crashdiet',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './afvallen-crashdiet.component.html',
  styleUrl: './afvallen-crashdiet.component.css',
})
export class AfvallenCrashdietComponent {
  crashdieetVraag = {
    question:
      'Wat is de belangrijkste reden dat een crashdieet op lange termijn niet werkt?',
    options: [
      {
        label: 'A',
        text: 'Omdat het op lange termijn niet vol te houden is.',
        isCorrect: true,
        explanation:
          'Crashdiëten leiden vaak tot snel gewichtsverlies, maar dit komt vooral door verlies van vocht en spiermassa. Ze zijn moeilijk vol te houden, en zodra je weer normaal eet, komt het gewicht meestal terug. Vetverlies blijft beperkt.',
      },
      {
        label: 'B',
        text: 'Omdat je lichaam minder energie gaat verbranden om te sparen.',
        isCorrect: false,
        explanation:
          'Je stofwisseling vertraagt inderdaad iets, maar dit effect is vaak kleiner dan mensen denken. Het is niet de hoofdreden dat crashdiëten falen.',
      },
      {
        label: 'C',
        text: 'Omdat je lichaam glycogeen en vocht weer opslaat nadat het dieet stopt.',
        isCorrect: false,
        explanation:
          'Na een dieet vult je lichaam inderdaad glycogeen en vocht aan, wat tijdelijk gewichtstoename geeft. Maar dit is normaal en niet de oorzaak van blijvend jojo-effect.',
      },
    ],
  };
}
