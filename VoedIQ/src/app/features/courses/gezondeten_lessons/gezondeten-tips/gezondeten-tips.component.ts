import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-gezondeten-tips',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './gezondeten-tips.component.html',
  styleUrl: './gezondeten-tips.component.css',
})
export class GezondetenTipsComponent {
  quizVariatieGroenten = {
    question:
      'Wat is een belangrijke reden om te variëren in groenten bij je maaltijd?',
    options: [
      {
        label: 'A',
        text: 'Omdat ze er dan mooier uitzien op je bord',
        isCorrect: false,
        explanation:
          'Het gaat niet om de uitstraling, maar om voedingsstoffen.',
      },
      {
        label: 'B',
        text: 'Omdat verschillende kleuren groenten verschillende voedingsstoffen bevatten',
        isCorrect: true,
        explanation:
          'Elke kleur groenten bevat unieke vitamines, mineralen en antioxidanten.',
      },
      {
        label: 'C',
        text: 'Omdat groenten anders te saai smaken',
        isCorrect: false,
        explanation: 'Smaak is niet de belangrijkste reden voor variatie.',
      },
      {
        label: 'D',
        text: 'Omdat het goedkoper is om veel soorten te kopen',
        isCorrect: false,
        explanation: 'Variatie is geen kostenkwestie maar een voedingskwestie.',
      },
    ],
  };

  quizEmotieEten = {
    question:
      'Wat is een goede manier om te voorkomen dat je uit emotie gaat eten?',
    options: [
      {
        label: 'A',
        text: 'Eten zo lang mogelijk uitstellen',
        isCorrect: false,
        explanation: 'Uitstellen kan juist zorgen voor meer trek of overeten.',
      },
      {
        label: 'B',
        text: 'Bewust worden van het verschil tussen echte honger en emotionele trek',
        isCorrect: true,
        explanation:
          'Bewustwording helpt om beter met emoties om te gaan en gezonde keuzes te maken.',
      },
      {
        label: 'C',
        text: 'Alleen eten als je helemaal geen trek hebt',
        isCorrect: false,
        explanation:
          'Dat is niet praktisch en kan leiden tot ongezonde eetpatronen.',
      },
      {
        label: 'D',
        text: 'Altijd een grote maaltijd klaar hebben liggen',
        isCorrect: false,
        explanation: 'Grote maaltijden helpen niet direct bij emotie-eten.',
      },
    ],
  };

  quizEtikettenLezen = {
    question:
      'Waarom is het belangrijk om etiketten te lezen, zelfs bij producten die als "gezond" worden gepresenteerd?',
    options: [
      {
        label: 'A',
        text: 'Omdat je dan weet of het product vers is',
        isCorrect: false,
        explanation:
          'Versheid staat meestal niet op het etiket, maar op houdbaarheidsdata.',
      },
      {
        label: 'B',
        text: 'Omdat je kunt controleren of het product biologisch is',
        isCorrect: false,
        explanation:
          'Biologisch wordt vaak met een keurmerk aangegeven, maar niet altijd op etiketten vermeld.',
      },
      {
        label: 'C',
        text: 'Omdat je dan kunt zien hoeveel voedingsstoffen en toegevoegde suikers het écht bevat',
        isCorrect: true,
        explanation:
          'Het etiket geeft inzicht in de voedingswaarde en verborgen suikers.',
      },
      {
        label: 'D',
        text: 'Omdat etiketten verplicht zijn',
        isCorrect: false,
        explanation:
          'Verplicht zijn etiketten wel, maar dat is niet de reden waarom je ze moet lezen.',
      },
    ],
  };
}
