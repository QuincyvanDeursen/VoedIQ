import { Component, OnInit } from '@angular/core';
import { PalCalculatorComponent } from '../../shared/components/pal-calculator/pal-calculator.component';
import { BmrCalculatorComponent } from '../../shared/components/bmr-calculator/bmr-calculator.component';
import { ActivityInputComponent } from '../../shared/components/activity-input/activity-input.component';
import { ActivityKcalCalculatorComponent } from '../../shared/components/activity-kcal-calculator/activity-kcal-calculator.component';
import { TdeeCalculatorComponent } from '../../shared/components/tdee-calculator/tdee-calculator.component';
import { MacronutrientCalculatorComponent } from '../../shared/components/macronutrient-calculator/macronutrient-calculator.component';
import { ToastService } from '../../shared/services/toast.service';
import { TargetWeightTimeCalculatorComponent } from '../../shared/components/target-weight-time-calculator/target-weight-time-calculator.component';
import { MicronutrientCalculatorComponent } from '../../shared/micronutrient-calculator/micronutrient-calculator.component';

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
}
