import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';

@Component({
  selector: 'app-basiskennis-etiket',
  imports: [InfoBlockComponent, QuizQuestionComponent],
  templateUrl: './basiskennis-etiket.component.html',
  styleUrl: './basiskennis-etiket.component.css',
})
export class BasiskennisEtiketComponent {
  // Vraag 1: Meest gebruikte ingrediënt
  etiketVraag1 = {
    question:
      'Wat is het meest gebruikte ingrediënt in dit product volgens de ingrediëntenlijst op het etiket?',
    options: [
      {
        label: 'A',
        text: 'Volkoren havervlok',
        isCorrect: true,
        explanation:
          'Ingrediënten staan op volgorde van hoeveelheid. Volkoren havervlok staat als eerste genoemd.',
      },
      {
        label: 'B',
        text: 'Rietsuiker',
        isCorrect: false,
        explanation:
          'Rietsuiker komt niet voor in het product. Het staat namelijk niet op het etiket.',
      },
      {
        label: 'C',
        text: 'Zonnebloemolie',
        isCorrect: false,
        explanation:
          'Zonnebloemolie staat verderop in de lijst en is dus minder aanwezig.',
      },
    ],
  };

  // Vraag 2: Suiker per portie
  etiketVraag2 = {
    question:
      'Hoeveel gram suiker bevat één portie van dit product volgens het etiket?',
    options: [
      {
        label: 'A',
        text: '7,5 gram',
        isCorrect: true,
        explanation:
          'Correct! Eén portie bevat 7,5 gram suiker, zoals aangegeven in de voedingswaardetabel.',
      },
      {
        label: 'B',
        text: '2,3 gram',
        isCorrect: false,
        explanation:
          'Dat is te weinig – controleer het etiket goed. Het juiste antwoord is 7,5 gram.',
      },
      {
        label: 'C',
        text: '12 gram',
        isCorrect: false,
        explanation:
          'Dat is te veel. Kijk naar de kolom “per portie” op het etiket. Het juiste antwoord is 7,5 gram.',
      },
    ],
  };

  // Vraag 3: Aantal E-nummers
  etiketVraag3 = {
    question: 'Hoeveel E-nummers staan er benoemd op het etiket?',
    options: [
      {
        label: 'A',
        text: '1',
        isCorrect: false,
        explanation:
          'Er worden meer E-nummers genoemd. Kijk goed in de ingrediëntenlijst. Het juiste antwoord is 3.',
      },
      {
        label: 'B',
        text: '5',
        isCorrect: false,
        explanation:
          'Dat zijn er te veel. Er staan maar drie E-nummers op het etiket.',
      },
      {
        label: 'C',
        text: '3',
        isCorrect: true,
        explanation:
          'Juist! Er worden drie verschillende E-nummers vermeld op het etiket.',
      },
    ],
  };
}
