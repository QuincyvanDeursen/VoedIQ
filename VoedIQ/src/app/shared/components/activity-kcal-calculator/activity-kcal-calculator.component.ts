import { Component } from '@angular/core';
import { Activity } from '../../../core/models/activity';
import { ActivityInputComponent } from '../activity-input/activity-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-activity-kcal-calculator',
  imports: [ActivityInputComponent, CommonModule, FormsModule],
  templateUrl: './activity-kcal-calculator.component.html',
  styleUrl: './activity-kcal-calculator.component.css',
})
export class ActivityKcalCalculatorComponent {
  selectedActivity: Activity | undefined;
  totalMinutes: number = 0;
  bodyWeight: number = 50;
  totalCalories: string = '';
  isVisable: boolean = false;
  private interval: any;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  handleActivityData(data: {
    activity: Activity | undefined;
    totalMinutes: number;
  }) {
    this.selectedActivity = data.activity;
    this.totalMinutes = data.totalMinutes;
  }

  /////////////////////////////////////////////////////////////////////
  /////////////////////////// Functionaliteit /////////////////////////
  /////////////////////////////////////////////////////////////////////

  calculateCalories(): void {
    if (!this.validateForm()) return;
    // Omrekeningen
    const durationInHours = this.totalMinutes / 60; // Converteer de tijd naar uren
    const MET = this.selectedActivity!.MET; // Haal de MET-waarde van de geselecteerde activiteit

    // Calorieën berekenen en maximaal 1 decimaal tonen
    this.totalCalories = (MET * this.bodyWeight * durationInHours).toFixed(1); // Gebruik toFixed(1)

    // Maak de visualisatie zichtbaar als de berekening correct is uitgevoerd
    this.isVisable = true;
    this.totalCalories = 'Resultaat: ' + this.totalCalories + ' kcal';
    this.toastService.success('Berekening voltooid');
  }

  private validateForm(): boolean {
    if (this.selectedActivity === undefined) {
      this.toastService.warning('Selecteer een activiteit');
      return false;
    }

    if (this.totalMinutes <= 0) {
      this.toastService.warning('Voer een geldige tijdsduur in');
      return false;
    }

    if (this.bodyWeight <= 0) {
      this.toastService.warning('Voer een geldig lichaamsgewicht in');
      return false;
    }

    return true;
  }

  /////////////////////////////////////////////////////////////////////
  /////////////////////////// Button hold methods ////////////////////
  //////////////////////////////////////////////////////////////////

  adjustValue(field: 'bodyWeight', change: number): void {
    if (this[field] === null) this[field] = 0;
    this[field]! += change;
  }

  startAdjusting(event: Event, field: 'bodyWeight', change: number): void {
    event.preventDefault(); // Voorkomt ongewenste gedrag op mobiel (zoals tekstselectie)
    this.adjustValue(field, change);
    this.interval = setInterval(() => this.adjustValue(field, change), 100);
  }

  stopAdjusting(): void {
    clearInterval(this.interval);
  }
}
