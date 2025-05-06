import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../../../../shared/components/quiz-question/quiz-question.component';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';

@Component({
  selector: 'app-basiskennis-module3-lesson2',
  imports: [QuizQuestionComponent, InfoBlockComponent],
  templateUrl: './basiskennis-module3-lesson2.component.html',
  styleUrl: './basiskennis-module3-lesson2.component.css',
})
export class BasiskennisModule3Lesson2Component {
  voedingsvraag = {
    question: 'Wat is een veelgemaakte misvatting over calorieën?',
    options: [
      {
        label: 'A',
        text: 'Calorieën zijn altijd slecht voor je gezondheid en moeten zoveel mogelijk vermeden worden.',
        isCorrect: false,
        explanation:
          'Calorieën zijn niet slecht op zich; ze zijn een belangrijke energiebron voor het lichaam. Het draait allemaal om het kiezen van de juiste balans tussen calorie-inname en verbruik. Te veel calorieën zonder voldoende activiteit kunnen leiden tot gewichtstoename, maar een matige hoeveelheid calorieën is essentieel voor het functioneren van het lichaam.',
      },
      {
        label: 'B',
        text: 'Calorieën uit gezonde voedingsmiddelen zoals avocado’s en noten moeten vermeden worden, omdat ze veel calorieën bevatten.',
        isCorrect: false,
        explanation:
          'Calorieën uit gezonde voedingsmiddelen zoals avocado’s en noten leveren waardevolle voedingsstoffen zoals gezonde vetten, vezels en vitaminen. Het gaat erom dat je de juiste balans vindt, niet dat je deze voedingsmiddelen volledig vermijdt.',
      },
      {
        label: 'C',
        text: 'Als je meer calorieën eet dan je verbruikt, kom je altijd aan, ongeacht de bron van die calorieën.',
        isCorrect: true,
        explanation:
          'Klopt! Het is waar dat als je meer calorieën consumeert dan je lichaam verbruikt, je zult aankomen. Dit geldt ongeacht of die calorieën afkomstig zijn van gezonde of ongezonde voedingsmiddelen. Het is belangrijk om een balans te vinden tussen calorie-inname en -verbruik voor een gezond gewicht.',
      },
    ],
  };
}
