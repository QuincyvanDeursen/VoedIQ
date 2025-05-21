import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-afvallen-hunger',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './afvallen-hunger.component.html',
  styleUrl: './afvallen-hunger.component.css',
})
export class AfvallenHungerComponent {
  hongerVoorkomenVraag = {
    question:
      'Wat is een effectieve manier om honger tijdens het afvallen te verminderen?',
    options: [
      {
        label: 'A',
        text: 'Zo min mogelijk eten, zodat je sneller afvalt',
        isCorrect: false,
        explanation:
          'Te weinig eten leidt juist tot meer honger, energiedips en het risico op terugval. Slim kiezen is effectiever dan extreem minderen.',
      },
      {
        label: 'B',
        text: 'Vasten tot je lichaam gewend raakt aan minder eten',
        isCorrect: false,
        explanation:
          'Vasten kan werken voor sommigen, maar het verhoogt bij anderen juist de honger en het risico op overeten later op de dag.',
      },
      {
        label: 'C',
        text: 'Kiezen voor vezel- en eiwitrijke voeding die goed verzadigt',
        isCorrect: true,
        explanation:
          'Voeding met veel vezels, eiwitten en vocht blijft langer in de maag en helpt je vol te blijven zonder veel calorieën te eten.',
      },
      {
        label: 'D',
        text: 'Alle tussendoortjes schrappen zodat je sneller resultaat ziet',
        isCorrect: false,
        explanation:
          'Het schrappen van tussendoortjes werkt alleen als je hoofdmaaltijden voldoende vullen. Anders leidt het tot extra honger.',
      },
    ],
  };
}
