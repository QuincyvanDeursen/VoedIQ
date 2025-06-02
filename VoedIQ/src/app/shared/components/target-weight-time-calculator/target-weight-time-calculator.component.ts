import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonHoldService } from '../../services/button-hold.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-target-weight-time-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './target-weight-time-calculator.component.html',
  styleUrl: './target-weight-time-calculator.component.css',
})
export class TargetWeightTimeCalculatorComponent implements OnInit {
  weight: number = 70; // Huidig gewicht in kg
  height: number = 175; // Lengte in cm
  tdee: number = 2500; // Totaal dagelijkse energiebehoefte
  goalWeight: number = 65; // Doelgewicht in kg
  calorieDelta: number = 500; // Dagelijkse calorie verandering (tekort of overschot)
  daysToGoal: number | null = null;
  bmiStatus: string = '';
  adviceColor: string = 'green';

  constructor(
    private buttonHoldService: ButtonHoldService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDataFromLocalStorage();
  }

  calculateWeightLossDuration() {
    if (!this.tdee || !this.weight || !this.goalWeight || !this.calorieDelta) {
      return;
    }

    const isLosing = this.goalWeight < this.weight;
    const weightDifferenceKg = Math.abs(this.goalWeight - this.weight);
    const totalCaloriesNeeded = weightDifferenceKg * 7700;

    const intake = isLosing
      ? this.tdee - this.calorieDelta
      : this.tdee + this.calorieDelta;

    if (this.calorieDelta <= 0) {
      this.toastService.error(
        'Dagelijkse calorie wijziging moet groter zijn dan 0.'
      );
      this.daysToGoal = null;
      return;
    }

    if (isLosing && intake <= 0) {
      this.toastService.error('Calorie tekort is te groot.');
      this.daysToGoal = null;
      return;
    }

    const actualDelta = Math.abs(this.dailyCalorieIntake - this.tdee);

    if (actualDelta === 0) {
      this.toastService.error('Geen calorietekort of -overschot vastgesteld.');
      this.daysToGoal = null;
      return;
    }

    this.daysToGoal = Math.ceil(totalCaloriesNeeded / actualDelta);
    const bmi = this.goalWeight / Math.pow(this.height / 100, 2);
    this.bmiStatus =
      bmi < 18.5 ? 'Ondergewicht' : bmi > 25 ? 'Overgewicht' : 'Gezond gewicht';

    const deltaPercentage = (this.calorieDelta / this.tdee) * 100;
    this.adviceColor =
      deltaPercentage <= 25
        ? 'green'
        : deltaPercentage <= 35
        ? 'orange'
        : 'red';

    this.saveLengthToLocalStorage();
    this.saveWeightToLocalStorage();
    this.toastService.success('Berekening voltooid!');
  }

  get isLosingWeight(): boolean {
    return this.goalWeight < this.weight;
  }

  get dailyCalorieIntake(): number {
    return this.isLosingWeight
      ? this.tdee - this.calorieDelta
      : this.tdee + this.calorieDelta;
  }

  get weightChange(): number {
    return Math.abs(this.goalWeight - this.weight);
  }

  get weightChangeType(): string {
    return this.isLosingWeight ? 'gewichtsverlies' : 'gewichtstoename';
  }

  private saveLengthToLocalStorage() {
    if (this.height) {
      localStorage.setItem('length', JSON.stringify(this.height));
    }
  }

  private saveWeightToLocalStorage() {
    if (this.weight) {
      localStorage.setItem('weight', JSON.stringify(this.weight));
    }
  }

  private loadDataFromLocalStorage() {
    const storedLength = localStorage.getItem('length');
    const storedWeight = localStorage.getItem('weight');
    const storedTDEE = localStorage.getItem('tdee');

    if (storedLength) this.height = JSON.parse(storedLength);
    if (storedWeight) this.weight = JSON.parse(storedWeight);
    if (storedTDEE) this.tdee = JSON.parse(storedTDEE);
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
