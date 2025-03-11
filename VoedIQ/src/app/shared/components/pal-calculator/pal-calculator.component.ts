import { Component, OnInit } from '@angular/core';
import { ActivityInputComponent } from '../activity-input/activity-input.component';
import { CommonModule } from '@angular/common';
import { Activity } from '../../../core/models/activity';

@Component({
  selector: 'app-pal-calculator',
  imports: [ActivityInputComponent, CommonModule],
  templateUrl: './pal-calculator.component.html',
  styleUrl: './pal-calculator.component.css',
})
export class PalCalculatorComponent implements OnInit {
  activities: {
    data: {
      activity: Activity | undefined;
      totalMinutes: number;
    };
  }[] = []; // Array voor activiteiten zonder id of tijd

  calculatePalValue: string = ''; // PAL-waarde

  ngOnInit() {
    // Zorg ervoor dat er ten minste één activiteit is, bijvoorbeeld een lege activiteit
    this.activities.push({ data: { activity: undefined, totalMinutes: 0 } });
  }

  addActivity() {
    // Voeg een nieuwe lege activiteit toe
    this.activities.push({ data: { activity: undefined, totalMinutes: 0 } });
  }

  removeActivity(index: number) {
    // Verwijder een activiteit op basis van de index
    if (this.activities.length === 1) {
      return;
    }
    this.activities.splice(index, 1);
  }

  handleActivityData(
    index: number,
    data: {
      activity: Activity | undefined;
      totalMinutes: number;
    }
  ) {
    // Werk de gegevens bij van een activiteit op basis van de index
    this.activities[index].data = data;
    console.log('Alle activiteiten:', this.activities);
  }

  calculatePal() {
    if (!this.validateForm()) {
      return;
    }

    // Totale uren in een week (7 dagen * 24 uur)
    const hoursInWeek = 7 * 24;

    // Totale actieve MET-uren
    let totalActiveMetHours = 0;

    // Loop door de activiteiten en bereken de actieve MET-uren
    this.activities.forEach((activity) => {
      if (activity.data.activity === undefined) {
        return;
      }
      // Converteer de minuten naar uren
      const hours = activity.data.totalMinutes / 60;

      // Bereken de actieve MET-uren (MET-waarde * tijd in uren)
      totalActiveMetHours += activity.data.activity.MET * hours;
    });

    // Totale rusttijd in uren
    const totalRestHours =
      hoursInWeek -
      this.activities.reduce(
        (sum, activity) => sum + activity.data.totalMinutes,
        0
      ) /
        60;

    // Rusttijd heeft een MET van 1, dus we tellen deze uren bij het totale aantal MET-uren
    const totalRestMetHours = totalRestHours * 1;

    // Bereken de PAL-waarde: (actieve MET-uren + rusttijd MET-uren) gedeeld door het aantal uren in de week
    const palValue = (totalActiveMetHours + totalRestMetHours) / hoursInWeek;
    // rounded to 2 decimals
    const roundedPalValue = Math.round(palValue * 100) / 100;
    this.calculatePalValue = roundedPalValue.toString();
    localStorage.setItem('palValue', roundedPalValue.toString());
    return roundedPalValue;
  }

  validateForm(): boolean {
    // Valideer of er activiteiten zijn en of ze correct zijn ingevuld
    if (this.activities.length === 0) {
      alert('Voeg ten minste één activiteit toe');
      return false;
    }

    // Controleer of alle activiteiten zijn ingevuld
    const indexOfUndefinedActivity = this.activities.findIndex(
      (activity) => activity.data.activity === undefined
    );
    if (indexOfUndefinedActivity !== -1) {
      alert(`Activiteit ${indexOfUndefinedActivity + 1} is niet ingevuld.`);
      return false;
    }

    // Controleer of de tijdsduur voor elke activiteit is ingevuld
    const indexOfNoDurationActivity = this.activities.findIndex(
      (activity) => activity.data.totalMinutes === 0
    );
    if (indexOfNoDurationActivity !== -1) {
      alert(`Activiteit ${indexOfNoDurationActivity + 1} mist de tijdsduur`);
      return false;
    }
    //controleer of de tijdsduur samen niet meer dan 168 uur is
    const totalMinutes = this.activities.reduce(
      (sum, activity) => sum + activity.data.totalMinutes,
      0
    );
    if (totalMinutes > 168 * 60) {
      alert('De totale tijdsduur mag niet meer dan 168 uur zijn');
      return false;
    }

    return true;
  }
}
