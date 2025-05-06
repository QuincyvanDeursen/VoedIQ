import { Component } from '@angular/core';
import { QuizComponent } from '../../../../shared/components/quiz/quiz.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basiskennis-module5-lesson1',
  imports: [QuizComponent, RouterLink],
  templateUrl: './basiskennis-module5-lesson1.component.html',
  styleUrl: './basiskennis-module5-lesson1.component.css',
})
export class BasiskennisModule5Lesson1Component {
  // Vervang dit met je daadwerkelijke quizvragen

  eindQuizVragen = [
    {
      question: 'Wat is een slimme strategie bij afvallen?',
      options: [
        {
          label: 'A',
          text: 'Voedsel eten dat weinig volume heeft maar veel calorieën bevat.',
          isCorrect: false,
          explanation:
            'Dat leidt juist sneller tot overeten. Je wilt het omgekeerde: veel volume, weinig calorieën.',
        },
        {
          label: 'B',
          text: 'Voedingsmiddelen eten die veel volume en weinig calorieën bevatten.',
          isCorrect: true,
          explanation:
            'Bijvoorbeeld groenten en volkoren producten zorgen voor een vol gevoel zonder veel calorieën.',
        },
      ],
    },
    {
      question: 'Wat is een voorbeeld van een onbewerkte voeding?',
      options: [
        {
          label: 'A',
          text: 'Een kant-en-klare pastasalade uit de supermarkt.',
          isCorrect: false,
          explanation:
            'Dat is vaak ultra bewerkt en bevat veel toegevoegde vetten en suikers.',
        },
        {
          label: 'B',
          text: 'Verse broccoli zonder toevoegingen.',
          isCorrect: true,
          explanation:
            'Groenten zoals broccoli zijn een voorbeeld van onbewerkte voeding in hun natuurlijke vorm.',
        },
      ],
    },
    {
      question: 'Wat zegt een Nutri-Score van A op een pizza?',
      options: [
        {
          label: 'A',
          text: 'Dat de pizza gezonder is dan bijvoorbeeld een bakje muesli met score B.',
          isCorrect: false,
          explanation:
            'De Nutri-Score vergelijkt alleen binnen een productgroep, dus tussen pizza’s onderling.',
        },
        {
          label: 'B',
          text: 'Dat het een gezondere keuze is binnen de categorie pizza’s.',
          isCorrect: true,
          explanation:
            'Nutri-Score kijkt binnen dezelfde soort producten, niet over alle soorten voeding heen.',
        },
      ],
    },
    {
      question: 'Waarom zijn E-nummers niet per definitie schadelijk?',
      options: [
        {
          label: 'A',
          text: 'Omdat ze allemaal uit natuurlijke producten komen.',
          isCorrect: false,
          explanation:
            'Niet alle E-nummers zijn natuurlijk, maar dat zegt niets over veiligheid.',
        },
        {
          label: 'B',
          text: 'Omdat ze getest en goedgekeurd zijn door voedselautoriteiten.',
          isCorrect: true,
          explanation:
            'E-nummers worden streng gecontroleerd en zijn veilig in de toegestane hoeveelheden.',
        },
      ],
    },
    {
      question: 'Wat kun je leren van het lezen van een voedseletiket?',
      options: [
        {
          label: 'A',
          text: 'Welke ingrediënten er in zitten en hoeveel calorieën het bevat.',
          isCorrect: true,
          explanation:
            'Etiketten laten de ingrediëntenlijst en voedingswaarden zien, essentieel voor bewuste keuzes.',
        },
        {
          label: 'B',
          text: 'Hoeveel water er in het product zit.',
          isCorrect: false,
          explanation:
            'Hoewel water soms genoemd wordt, draait het etiket vooral om voedingsstoffen en ingrediënten.',
        },
      ],
    },
  ];
}
