import { Component } from '@angular/core';
import { QuizComponent } from '../../../../shared/components/quiz/quiz.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-afvallen-end-screen',
  imports: [QuizComponent, RouterLink],
  templateUrl: './afvallen-end-screen.component.html',
  styleUrl: './afvallen-end-screen.component.css',
})
export class AfvallenEndScreenComponent {
  eindQuizVragen = [
    {
      question: 'Wat is de belangrijkste voorwaarde voor vetverlies?',
      options: [
        {
          label: 'A',
          text: 'Het vermijden van koolhydraten',
          isCorrect: false,
          explanation:
            'Koolhydraten veroorzaken geen vetopslag op zichzelf. Vetverlies draait altijd om een calorie-tekort.',
        },
        {
          label: 'B',
          text: 'Elke dag intensief sporten',
          isCorrect: false,
          explanation:
            'Beweging helpt, maar zonder calorie-tekort val je alsnog niet af.',
        },
        {
          label: 'C',
          text: 'Een langdurig en haalbaar calorie-tekort creëren',
          isCorrect: true,
          explanation:
            'Zonder calorie-tekort is er geen vetverlies. Het moet haalbaar zijn om het vol te kunnen houden.',
        },
      ],
    },
    {
      question: 'Wat maakt een dieet duurzaam op de lange termijn?',
      options: [
        {
          label: 'A',
          text: 'Als je snel resultaat ziet in de eerste week',
          isCorrect: false,
          explanation:
            'Snelle resultaten zijn vaak tijdelijk. Duurzaamheid draait om wat je volhoudt.',
        },
        {
          label: 'B',
          text: 'Als het aansluit bij jouw gewoontes en vol te houden is',
          isCorrect: true,
          explanation:
            'Zelfsturing is de sleutel. Alleen iets dat past bij jouw leven kun je langdurig volhouden.',
        },
        {
          label: 'C',
          text: 'Als je veel producten moet schrappen',
          isCorrect: false,
          explanation:
            'Restrictieve diëten zijn vaak moeilijk vol te houden op de lange termijn.',
        },
      ],
    },
    {
      question: 'Wat is een slimme manier om je eetpatroon aan te passen?',
      options: [
        {
          label: 'A',
          text: 'Je voeding aanpassen in kleine, haalbare stappen',
          isCorrect: true,
          explanation:
            'Kleine veranderingen zorgen voor structurele verbetering en zijn beter vol te houden.',
        },
        {
          label: 'B',
          text: 'Een streng eetschema volgen dat alles voor je bepaalt',
          isCorrect: false,
          explanation:
            'Strenge schema’s werken zelden op lange termijn als ze niet bij je passen.',
        },
        {
          label: 'C',
          text: 'Zo min mogelijk eten zodat je sneller afvalt',
          isCorrect: false,
          explanation:
            'Te weinig eten is niet vol te houden en vergroot de kans op terugval en tekorten.',
        },
      ],
    },
    {
      question:
        'Wat doe je als je een dieet tegenkomt met veel regels en verboden?',
      options: [
        {
          label: 'A',
          text: 'Kritisch kijken of het helpt bij een energietekort en of het past bij jouw leven',
          isCorrect: true,
          explanation:
            'De inhoud van een dieet moet jou dienen, anders is het niet duurzaam.',
        },
        {
          label: 'B',
          text: 'Het volgen omdat anderen er goed mee zijn afgevallen',
          isCorrect: false,
          explanation:
            'Wat werkt voor een ander, werkt niet per se voor jou. Je eigen situatie is leidend.',
        },
        {
          label: 'C',
          text: 'Zoveel mogelijk regels combineren voor maximaal effect',
          isCorrect: false,
          explanation:
            'Meer regels betekent niet meer effect. Het risico op terugval wordt dan juist groter.',
        },
      ],
    },
    {
      question: 'Wat is volgens VoedIQ essentieel om succesvol af te vallen?',
      options: [
        {
          label: 'A',
          text: 'Begrijpen wat je doet en keuzes maken die bij jou passen',
          isCorrect: true,
          explanation:
            'Succesvol afvallen draait om inzicht, consistentie en zelfsturing — niet om perfectie.',
        },
        {
          label: 'B',
          text: 'Perfect je voedingsplan volgen zonder fouten',
          isCorrect: false,
          explanation:
            'Perfectie bestaat niet. Het draait om volhouden, niet om foutloos zijn.',
        },
        {
          label: 'C',
          text: 'Altijd dezelfde maaltijden eten zodat je niet hoeft na te denken',
          isCorrect: false,
          explanation:
            'Herhaling kan helpen, maar variatie en flexibiliteit maken het juist vol te houden.',
        },
      ],
    },
  ];
}
