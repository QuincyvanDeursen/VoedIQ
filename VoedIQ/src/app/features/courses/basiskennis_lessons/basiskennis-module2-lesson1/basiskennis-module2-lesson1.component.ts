import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-basiskennis-module2-lesson1',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './basiskennis-module2-lesson1.component.html',
  styleUrl: './basiskennis-module2-lesson1.component.css',
})
export class BasiskennisModule2Lesson1Component {
  zetmeelVraag = {
    question:
      'Omdat zetmeel langzamer verteert dan suiker, welke van deze twee stellingen is waar?',
    options: [
      {
        label: 'A',
        text: 'Zetmeel geeft geleidelijke energie en verzadigt beter dan suiker.',
        isCorrect: true,
        explanation:
          'Zetmeel bestaat uit complexe koolhydraten die langzamer worden verteerd en daardoor voor een gelijkmatigere energietoevoer zorgen. Dit zorgt ook voor een beter verzadigingsgevoel.',
      },
      {
        label: 'B',
        text: 'Zetmeel levert direct een energieboost, net zoals suiker dat doet.',
        isCorrect: false,
        explanation:
          'Suikers worden veel sneller opgenomen in het bloed dan zetmeel en zorgen daardoor voor een directe energiepiek. Zetmeel doet dit juist langzamer.',
      },
    ],
  };
}
