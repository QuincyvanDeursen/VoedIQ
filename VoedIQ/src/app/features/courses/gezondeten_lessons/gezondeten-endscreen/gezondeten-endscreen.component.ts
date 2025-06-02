import { Component } from '@angular/core';
import { QuizComponent } from '../../../../shared/components/quiz/quiz.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gezondeten-endscreen',
  imports: [QuizComponent, RouterLink],
  templateUrl: './gezondeten-endscreen.component.html',
  styleUrl: './gezondeten-endscreen.component.css',
})
export class GezondetenEndscreenComponent {
  eindQuizVragen = [
    {
      question:
        'Waarom is het belangrijk om zowel plantaardige als dierlijke producten in een gezond eetpatroon te combineren (indien geen vegetarisch dieet)?',
      options: [
        {
          label: 'A',
          text: 'Omdat plantaaride producten beter zijn dan dierlijke producten.',
          isCorrect: false,
          explanation:
            'Dat klopt niet. Beide leveren verschillende voedingsstoffen. Plantaardige producten leveren vezels, terwijl dierlijke bijvoorbeeld vitamine B12 bevatten.',
        },
        {
          label: 'B',
          text: 'Omdat ze elkaar aanvullen in voedingsstoffen zoals eiwitten, ijzer en vitamine B12.',
          isCorrect: true,
          explanation:
            'Plantaardige en dierlijke producten vullen elkaar aan en zorgen samen voor een volwaardig voedingspatroon.',
        },
      ],
    },
    {
      question:
        'Welke van de volgende producten bevat waarschijnlijk de meeste *toegevoegde suikers* per portie?',
      options: [
        {
          label: 'A',
          text: 'Yoghurt met smaak uit een pak (kant-en-klaar).',
          isCorrect: true,
          explanation:
            'Kant-en-klare fruityoghurt bevat vaak veel toegevoegde suikers, in tegenstelling tot naturel yoghurt met vers fruit.',
        },
        {
          label: 'B',
          text: 'fruit met naturel yoghurt.',
          isCorrect: false,
          explanation:
            'Natuurlijke yoghurt met vers fruit bevat geen toegevoegde suikers, alleen de suikers die van nature in het fruit zitten.',
        },
      ],
    },
    {
      question: 'Wat zegt de volgorde van ingrediënten op een voedseletiket?',
      options: [
        {
          label: 'A',
          text: 'De ingrediënten staan gerangschikt van het minst naar het meest gebruikte.',
          isCorrect: false,
          explanation:
            'Nee, de ingrediënten staan altijd in aflopende volgorde van hoeveelheid, dus het meest gebruikte staat vooraan.',
        },
        {
          label: 'B',
          text: 'De ingrediënten staan in volgorde van hoeveelheid, van hoog naar laag.',
          isCorrect: true,
          explanation:
            'Dit is verplicht op etiketten en helpt bij het beoordelen van hoe gezond een product is.',
        },
      ],
    },
    {
      question:
        'Waarom is het gezonder om te kiezen voor volkoren producten in plaats van witte varianten?',
      options: [
        {
          label: 'A',
          text: 'Omdat volkoren producten meer koolhydraten bevatten en daardoor beter vullen.',
          isCorrect: false,
          explanation:
            'Volkoren betekent dat het hele graan is gebruikt, inclusief vezels. Niet dat het meer koolhydraten bevat.',
        },
        {
          label: 'B',
          text: 'Omdat ze meer vezels bevatten.',
          isCorrect: true,
          explanation:
            'Vezels dragen bij aan een verzadigd gevoel, een gezonde darmwerking en een stabiele bloedsuikerspiegel.',
        },
      ],
    },
    {
      question:
        'Wat betekent het als een product binnen zijn categorie de Nutri-Score A krijgt?',
      options: [
        {
          label: 'A',
          text: 'Dat het het gezondste product is van alle producten in de supermarkt.',
          isCorrect: false,
          explanation:
            'De Nutri-Score vergelijkt alleen binnen een productcategorie. Een Nutri-Score A op een pizza betekent niet dat het gezonder is dan bijvoorbeeld havermout met Nutri-Score B.',
        },
        {
          label: 'B',
          text: 'Dat het een gezondere keuze is binnen die specifieke productgroep.',
          isCorrect: true,
          explanation:
            'Nutri-Score helpt je om binnen dezelfde soort producten — zoals ontbijtgranen of kant-en-klaarmaaltijden — een betere keuze te maken.',
        },
      ],
    },
  ];
}
