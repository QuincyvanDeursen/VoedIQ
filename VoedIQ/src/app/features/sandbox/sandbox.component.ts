import { Component, OnInit } from '@angular/core';
import { PalCalculatorComponent } from '../../shared/components/pal-calculator/pal-calculator.component';
import { BmrCalculatorComponent } from '../../shared/components/bmr-calculator/bmr-calculator.component';
import { ActivityInputComponent } from '../../shared/components/activity-input/activity-input.component';
import { ActivityKcalCalculatorComponent } from '../../shared/components/activity-kcal-calculator/activity-kcal-calculator.component';
import { TdeeCalculatorComponent } from '../../shared/components/tdee-calculator/tdee-calculator.component';
import { MacronutrientCalculatorComponent } from '../../shared/components/macronutrient-calculator/macronutrient-calculator.component';
import { ToastService } from '../../shared/services/toast.service';
import { TargetWeightTimeCalculatorComponent } from '../../shared/components/target-weight-time-calculator/target-weight-time-calculator.component';
import { MicronutrientCalculatorComponent } from '../../shared/components/micronutrient-calculator/micronutrient-calculator.component';
import { QuizQuestion } from '../../core/models/quiz-question';
import { QuizQuestionComponent } from '../../shared/components/quiz-question/quiz-question.component';
import { QuizComponent } from '../../shared/components/quiz/quiz.component';

@Component({
  selector: 'app-sandbox',
  imports: [
    PalCalculatorComponent,
    BmrCalculatorComponent,
    ActivityInputComponent,
    ActivityKcalCalculatorComponent,
    TdeeCalculatorComponent,
    MacronutrientCalculatorComponent,
    TargetWeightTimeCalculatorComponent,
    MicronutrientCalculatorComponent,
    QuizQuestionComponent,
    QuizComponent,
  ],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.css',
})
export class SandboxComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  showWarningToast() {
    this.toastService.warning('Dit is een warning toast');
  }

  showSuccessToast() {
    this.toastService.success('Dit is een success toast');
  }

  showErrorToast() {
    this.toastService.error('Dit is een error toast');
  }

  showInfoToast() {
    this.toastService.info('Dit is een info toast');
  }

  questions: QuizQuestion[] = [
    {
      question:
        'Als mensen evenveel energie per kilo lichaamsgewicht zouden verbranden als een kolibrie, hoeveel kcal zouden ze dan per dag nodig hebben?',
      options: [
        {
          label: 'A',
          text: '2.000 kcal',
          isCorrect: false,
          explanation: 'Dat is het normale verbruik, niet het kolibrie-tempo.',
        },
        {
          label: 'B',
          text: '10.000 kcal',
          isCorrect: false,
          explanation:
            'Zelfs topsporters halen dit zelden, kolibries gaan nog véél verder.',
        },
        {
          label: 'C',
          text: '3.360.000 kcal',
          isCorrect: true,
          explanation:
            'Kolibries verbranden ~48.000 kcal per kilo per dag. Bij 70 kg is dat 3.360.000 kcal!',
        },
      ],
    },
    {
      question:
        'Als mensen evenveel energie per kilo lichaamsgewicht zouden verbranden als een kolibrie, hoeveel kcal zouden ze dan per dag nodig hebben?',
      options: [
        {
          label: 'A',
          text: '2.000 kcal',
          isCorrect: false,
          explanation: 'Dat is het normale verbruik, niet het kolibrie-tempo.',
        },
        {
          label: 'B',
          text: '10.000 kcal',
          isCorrect: false,
          explanation:
            'Zelfs topsporters halen dit zelden, kolibries gaan nog véél verder.',
        },
        {
          label: 'C',
          text: '3.360.000 kcal',
          isCorrect: true,
          explanation:
            'Kolibries verbranden ~48.000 kcal per kilo per dag. Bij 70 kg is dat 3.360.000 kcal!',
        },
      ],
    },
    {
      question:
        'Als mensen evenveel energie per kilo lichaamsgewicht zouden verbranden als een kolibrie, hoeveel kcal zouden ze dan per dag nodig hebben?',
      options: [
        {
          label: 'A',
          text: '2.000 kcal',
          isCorrect: false,
          explanation: 'Dat is het normale verbruik, niet het kolibrie-tempo.',
        },
        {
          label: 'B',
          text: '10.000 kcal',
          isCorrect: false,
          explanation:
            'Zelfs topsporters halen dit zelden, kolibries gaan nog véél verder.',
        },
        {
          label: 'C',
          text: '3.360.000 kcal',
          isCorrect: true,
          explanation:
            'Kolibries verbranden ~48.000 kcal per kilo per dag. Bij 70 kg is dat 3.360.000 kcal!',
        },
      ],
    },
    {
      question:
        'Als mensen evenveel energie per kilo lichaamsgewicht zouden verbranden als een kolibrie, hoeveel kcal zouden ze dan per dag nodig hebben?',
      options: [
        {
          label: 'A',
          text: '2.000 kcal',
          isCorrect: false,
          explanation: 'Dat is het normale verbruik, niet het kolibrie-tempo.',
        },
        {
          label: 'B',
          text: '10.000 kcal',
          isCorrect: false,
          explanation:
            'Zelfs topsporters halen dit zelden, kolibries gaan nog véél verder.',
        },
        {
          label: 'C',
          text: '3.360.000 kcal',
          isCorrect: true,
          explanation:
            'Kolibries verbranden ~48.000 kcal per kilo per dag. Bij 70 kg is dat 3.360.000 kcal!',
        },
      ],
    },
    {
      question:
        'Als mensen evenveel energie per kilo lichaamsgewicht zouden verbranden als een kolibrie, hoeveel kcal zouden ze dan per dag nodig hebben?',
      options: [
        {
          label: 'A',
          text: '2.000 kcal',
          isCorrect: false,
          explanation: 'Dat is het normale verbruik, niet het kolibrie-tempo.',
        },
        {
          label: 'B',
          text: '10.000 kcal',
          isCorrect: false,
          explanation:
            'Zelfs topsporters halen dit zelden, kolibries gaan nog véél verder.',
        },
        {
          label: 'C',
          text: '3.360.000 kcal',
          isCorrect: true,
          explanation:
            'Kolibries verbranden ~48.000 kcal per kilo per dag. Bij 70 kg is dat 3.360.000 kcal!',
        },
      ],
    },
    {
      question:
        'Als mensen evenveel energie per kilo lichaamsgewicht zouden verbranden als een kolibrie, hoeveel kcal zouden ze dan per dag nodig hebben?',
      options: [
        {
          label: 'A',
          text: '2.000 kcal',
          isCorrect: false,
          explanation: 'Dat is het normale verbruik, niet het kolibrie-tempo.',
        },
        {
          label: 'B',
          text: '10.000 kcal',
          isCorrect: false,
          explanation:
            'Zelfs topsporters halen dit zelden, kolibries gaan nog véél verder.',
        },
        {
          label: 'C',
          text: '3.360.000 kcal',
          isCorrect: true,
          explanation:
            'Kolibries verbranden ~48.000 kcal per kilo per dag. Bij 70 kg is dat 3.360.000 kcal!',
        },
      ],
    },
  ];
}
