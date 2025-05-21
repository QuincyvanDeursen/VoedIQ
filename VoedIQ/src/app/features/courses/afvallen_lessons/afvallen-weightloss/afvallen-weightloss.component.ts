import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-afvallen-weightloss',
  imports: [QuizQuestionComponent, InfoBlockComponent, CommonModule],
  templateUrl: './afvallen-weightloss.component.html',
  styleUrl: './afvallen-weightloss.component.css',
})
export class AfvallenWeightlossComponent {
  antwoord: boolean | null = null;

  vetverliesVraag = {
    question:
      'Wat is de meest waarschijnlijke reden dat je na één dag 2 kg zwaarder weegt op de weegschaal?',
    options: [
      {
        label: 'A',
        text: 'Je hebt in één dag 15.400 kcal te veel gegeten',
        isCorrect: false,
        explanation:
          'Dat is extreem onwaarschijnlijk. Om 2 kg vet aan te komen, moet je ruim 15.000 kcal boven je onderhoudsniveau eten – dat gebeurt niet per ongeluk in één dag.',
      },
      {
        label: 'B',
        text: 'Je bent 2 kg vet aangekomen',
        isCorrect: false,
        explanation:
          '2 kg vet in één dag aankomen is praktisch onmogelijk. Gewichtstoename op korte termijn is zelden puur vet.',
      },
      {
        label: 'C',
        text: 'Je lichaam houdt tijdelijk meer vocht vast',
        isCorrect: true,
        explanation:
          'Correct! Gewichtsschommelingen van 1-2 kg in één dag komen meestal door vocht, beïnvloed door o.a. zoutinname, koolhydraten, hormonen of stress.',
      },
      {
        label: 'D',
        text: 'Je bent 2 kg spieren aangekomen',
        isCorrect: false,
        explanation:
          'Zelfs bij intensieve krachttraining bouw je hooguit een paar honderd gram spier per maand op. 2 kg in één dag is niet mogelijk.',
      },
    ],
  };
}
