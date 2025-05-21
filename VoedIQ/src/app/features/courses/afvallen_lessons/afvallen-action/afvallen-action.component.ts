import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-afvallen-action',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './afvallen-action.component.html',
  styleUrl: './afvallen-action.component.css',
})
export class AfvallenActionComponent {
  zelfsturingVraag = {
    question: 'Wat bepaalt of een dieet écht werkt voor jou?',
    options: [
      {
        label: 'A',
        text: 'Of het dieet zo weinig mogelijk calorieën bevat',
        isCorrect: false,
        explanation:
          'Een extreem laag aantal calorieën kan op korte termijn werken, maar is meestal niet vol te houden.',
      },
      {
        label: 'B',
        text: 'Of het past binnen jouw leven, voorkeuren en gewoontes',
        isCorrect: true,
        explanation:
          'Een dieet moet aansluiten bij jouw situatie. Alleen dan kun je het op lange termijn volhouden.',
      },
      {
        label: 'C',
        text: 'Of het door veel mensen gevolgd wordt',
        isCorrect: false,
        explanation:
          'Populariteit zegt niets over effectiviteit voor jouw persoonlijke situatie.',
      },
      {
        label: 'D',
        text: 'Of je alle producten uit een lijst vermijdt',
        isCorrect: false,
        explanation:
          'Verboden lijsten werken vaak averechts. Flexibiliteit en begrip zijn belangrijker dan restrictie.',
      },
    ],
  };
}
