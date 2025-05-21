import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-basiskennis-modified',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './basiskennis-modified.component.html',
  styleUrl: './basiskennis-modified.component.css',
})
export class BasiskennisModifiedComponent {
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
