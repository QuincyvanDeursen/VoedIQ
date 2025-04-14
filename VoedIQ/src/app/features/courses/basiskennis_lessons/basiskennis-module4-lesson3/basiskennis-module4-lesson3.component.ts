import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-basiskennis-module4-lesson3',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './basiskennis-module4-lesson3.component.html',
  styleUrl: './basiskennis-module4-lesson3.component.css',
})
export class BasiskennisModule4Lesson3Component {
  voedingsvraag = {
    question:
      'Welk van de volgende voedingsmiddelen is het beste voorbeeld van ultra bewerkte voeding?',
    options: [
      {
        label: 'A',
        text: 'Volkorenbrood',
        isCorrect: false,
        explanation:
          'Volkorenbrood wordt bewerkt, maar het is niet ultra bewerkt. Het bevat weinig tot geen kunstmatige toevoegingen.',
      },
      {
        label: 'B',
        text: 'Yoghurt met toegevoegde suikers',
        isCorrect: true,
        explanation:
          'Yoghurt kan ultra bewerkt zijn, vooral als het veel toegevoegde suikers, kunstmatige zoetstoffen of conserveermiddelen bevat.',
      },
      {
        label: 'C',
        text: 'Gezonde notenmix',
        isCorrect: false,
        explanation:
          'Een gezonde notenmix is een bewerkt product, maar meestal niet in de mate van ultra bewerkte voeding.',
      },
      {
        label: 'D',
        text: 'Groentesoep (zelfgemaakt)',
        isCorrect: false,
        explanation:
          'Zelfgemaakte groentesoep is onbewerkt en bevat geen kunstmatige toevoegingen.',
      },
    ],
  };
}
