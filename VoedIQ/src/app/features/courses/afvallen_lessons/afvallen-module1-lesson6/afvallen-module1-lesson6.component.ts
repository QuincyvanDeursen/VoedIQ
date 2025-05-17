import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-afvallen-module1-lesson6',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './afvallen-module1-lesson6.component.html',
  styleUrl: './afvallen-module1-lesson6.component.css',
})
export class AfvallenModule1Lesson6Component {
  caloriedichtheidVraag = {
    question:
      'Wat is een belangrijk voordeel van het kiezen voor voedingsmiddelen met een lage caloriedichtheid tijdens een caloriebeperkt dieet?',
    options: [
      {
        label: 'A',
        text: 'Ze zorgen voor meer maagvulling per calorie, waardoor je makkelijker een energietekort kunt volhouden',
        isCorrect: true,
        explanation:
          'Voedingsmiddelen met een lage caloriedichtheid – zoals groenten, fruit en soep – bevatten relatief weinig calorieën per gram. Ze nemen veel ruimte in in de maag en geven sneller een vol gevoel, wat helpt bij het beheersen van de energie-inname zonder honger.',
      },
      {
        label: 'B',
        text: 'Ze bevatten minder koolhydraten en suikers dan calorierijke producten',
        isCorrect: false,
        explanation:
          'Niet alle producten met lage caloriedichtheid zijn per definitie laag in koolhydraten of suikers. Veel fruit bevat bijvoorbeeld natuurlijke suikers, maar is alsnog laag in caloriedichtheid.',
      },
      {
        label: 'C',
        text: 'Ze versnellen de vetverbranding door een hogere thermische werking',
        isCorrect: false,
        explanation:
          'De thermische werking van voedsel verschilt per macronutriënt, maar caloriedichtheid zelf heeft hier geen directe invloed op.',
      },
      {
        label: 'D',
        text: 'Ze zorgen ervoor dat het lichaam meer vocht vasthoudt en zo het hongergevoel onderdrukt',
        isCorrect: false,
        explanation:
          'Vochtinname speelt wel een rol in verzadiging, maar dat is niet de belangrijkste reden waarom voedingsmiddelen met lage caloriedichtheid helpen bij afvallen.',
      },
    ],
  };
}
