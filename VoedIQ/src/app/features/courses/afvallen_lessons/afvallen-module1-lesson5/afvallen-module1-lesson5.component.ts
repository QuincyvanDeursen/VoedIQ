import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-afvallen-module1-lesson5',
  imports: [QuizQuestionComponent, InfoBlockComponent, CommonModule],
  templateUrl: './afvallen-module1-lesson5.component.html',
  styleUrl: './afvallen-module1-lesson5.component.css',
})
export class AfvallenModule1Lesson5Component {
  antwoord: boolean | null = null;
  supplementenVraag = {
    question: 'Waar draait afvallen in de basis altijd om?',
    options: [
      {
        label: 'A',
        text: 'Het eten van vetarme producten en het vermijden van suiker',
        isCorrect: false,
        explanation:
          'Vetverlies komt niet door het vermijden van specifieke voedingsmiddelen, maar door een calorietekort.',
      },
      {
        label: 'B',
        text: 'Het nemen van supplementen die je stofwisseling versnellen',
        isCorrect: false,
        explanation:
          'Supplementen versnellen je stofwisseling meestal niet, vooral niet zonder een tekort of specifieke medische noodzaak.',
      },
      {
        label: 'C',
        text: 'Het creëren van een langdurig calorie-tekort',
        isCorrect: true,
        explanation:
          'Afvallen draait altijd om een consistent calorie-tekort over een langere periode.',
      },
      {
        label: 'D',
        text: 'Het drinken van groene thee en citroenwater',
        isCorrect: false,
        explanation:
          'Hoewel gezond, zorgen deze dranken niet voor vetverlies zonder een calorie-tekort.',
      },
    ],
  };
}
