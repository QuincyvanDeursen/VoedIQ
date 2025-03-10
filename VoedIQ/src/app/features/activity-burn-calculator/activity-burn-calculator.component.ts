import { Component, OnInit } from '@angular/core';
import { ActivityInputComponent } from '../../shared/components/activity-input/activity-input.component';
import { Activity } from '../../core/models/activity';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-burn-calculator',
  imports: [ActivityInputComponent, FormsModule, CommonModule],
  templateUrl: './activity-burn-calculator.component.html',
  styleUrl: './activity-burn-calculator.component.css',
})
export class ActivityBurnCalculatorComponent implements OnInit {
  selectedActivity: Activity | undefined;
  totalMinutes: number = 0;
  bodyWeight: number = 0;
  totalCalories: string = '';
  isVisable: boolean = false;

  ngOnInit(): void {}

  handleActivityData(data: {
    activity: Activity | undefined;
    totalMinutes: number;
  }) {
    this.selectedActivity = data.activity;
    this.totalMinutes = data.totalMinutes;
    console.log(
      'Data ontvangen in de parent:',
      this.selectedActivity,
      'Totaal aantal minuten:',
      this.totalMinutes
    );
  }

  /////////////////////////////////////////////////////////////////////
  /////////////////////////// Functionaliteit /////////////////////////
  /////////////////////////////////////////////////////////////////////

  calculateCalories(): void {
    if (
      this.selectedActivity &&
      (this.bodyWeight > 0 || this.totalMinutes > 0)
    ) {
      // Omrekeningen
      const durationInHours = this.totalMinutes / 60; // Converteer de tijd naar uren
      const MET = this.selectedActivity.MET; // Haal de MET-waarde van de geselecteerde activiteit

      // Calorieën berekenen en maximaal 1 decimaal tonen
      this.totalCalories = (MET * this.bodyWeight * durationInHours).toFixed(1); // Gebruik toFixed(1)

      // Maak de visualisatie zichtbaar als de berekening correct is uitgevoerd
      this.isVisable = true;
      this.totalCalories = 'Resultaat: ' + this.totalCalories + ' kcal';
    } else {
      this.isVisable = true;
      this.totalCalories = 'Ongeldige invoer';
    }
  }

  // Methode voor het verhogen van de bodyWeight
  incrementBodyWeight() {
    this.bodyWeight++;
  }

  // Methode voor het verlagen van de bodyWeight
  decrementBodyWeight() {
    if (this.bodyWeight > 0) {
      // Zorg ervoor dat de waarde niet negatief wordt
      this.bodyWeight--;
    }
  }
}
