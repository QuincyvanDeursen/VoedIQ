import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-basiskennis-water',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './basiskennis-water.component.html',
  styleUrl: './basiskennis-water.component.css',
})
export class BasiskennisWaterComponent {
  waterVraag = {
    question:
      'Waarom kan een tekort aan water indirect leiden tot schade aan organen, zelfs als het tekort mild lijkt?',
    options: [
      {
        label: 'A',
        text: 'Omdat afvalstoffen zich kunnen ophopen en de doorbloeding verslechtert, wat de werking van organen kan aantasten.',
        isCorrect: true,
        explanation:
          'Water is cruciaal voor het afvoeren van afvalstoffen en het op peil houden van het bloedvolume. Een tekort kan deze processen verstoren, wat op de lange termijn schadelijk is voor organen zoals nieren, lever en hersenen.',
      },
      {
        label: 'B',
        text: 'Omdat het lichaam vetcellen gebruikt als vervanging voor water, wat organen overbelast.',
        isCorrect: false,
        explanation:
          'Het lichaam gebruikt geen vetcellen ter vervanging van water. Bij een tekort past het lichaam processen aan, maar vet speelt daarin geen directe vervangende rol.',
      },
    ],
  };
}
