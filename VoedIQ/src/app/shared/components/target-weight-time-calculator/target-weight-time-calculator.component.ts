import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonHoldService } from '../../services/button-hold.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-target-weight-time-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './target-weight-time-calculator.component.html',
  styleUrl: './target-weight-time-calculator.component.css',
})
export class TargetWeightTimeCalculatorComponent {
  weight: number = 70; // Huidig gewicht in kg
  height: number = 175; // Lengte in cm
  tdee: number = 2500; // Totaal dagelijkse energiebehoefte
  goalWeight: number = 65; // Doelgewicht in kg
  calorieDeficit: number = 500; // Dagelijks calorietekort
  daysToGoal: number | null = null;
  bmiStatus: string = '';
  adviceColor: string = 'green';

  constructor(
    private buttonHoldService: ButtonHoldService,
    private toastService: ToastService
  ) {}

  calculateWeightLossDuration() {
    if (
      !this.tdee ||
      !this.weight ||
      !this.goalWeight ||
      !this.calorieDeficit
    ) {
      return;
    }

    let weightDifference = this.goalWeight - this.weight; // Kan positief (aankomen) of negatief (afvallen) zijn
    let totalCaloriesNeeded = Math.abs(weightDifference) * 7700;

    // **Check of het afvallen of aankomen is**
    if (weightDifference < 0) {
      // Afvallen: calorietekort mag niet groter zijn dan de TDEE
      this.calorieDeficit = Math.min(this.calorieDeficit, this.tdee);
    }

    this.daysToGoal = Math.ceil(totalCaloriesNeeded / this.calorieDeficit);

    // **BMI berekenen op basis van het doelgewicht**
    let bmi = this.goalWeight / Math.pow(this.height / 100, 2);

    this.bmiStatus =
      bmi < 18.5 ? 'Ondergewicht' : bmi > 25 ? 'Overgewicht' : 'Gezond gewicht';

    let deficitPercentage = (this.calorieDeficit / this.tdee) * 100;
    this.adviceColor =
      deficitPercentage <= 25
        ? 'green'
        : deficitPercentage <= 35
        ? 'orange'
        : 'red';
  }

  startAdjusting(field: string, change: number, decimalPlaces: number): void {
    this.buttonHoldService.startAdjusting(
      this,
      field,
      change,
      0,
      decimalPlaces
    );
  }

  stopAdjusting(): void {
    this.buttonHoldService.stopAdjusting();
  }
}
