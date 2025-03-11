import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { ActivityService } from '../../../core/services/activity.service';
import { Activity } from '../../../core/models/activity';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './activity-input.component.html',
  styleUrls: ['./activity-input.component.css'],
})
export class ActivityInputComponent {
  @Input() timeUnit: string = 'hoeveel uren en/of minuten per week?'; // Default waarde
  @Output() activityData = new EventEmitter<{
    activity: Activity | undefined;
    totalMinutes: number;
  }>();

  searchTerm: string = ''; // Zoekterm
  selectedActivity: Activity | undefined; // Gekozen activiteit
  durationHours: number = 0; // Uren
  durationMinutes: number = 0; // Minuten
  filteredActivities: any[] = [];
  dropdownOpen: boolean = false;

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    // Activiteiten ophalen
    this.filteredActivities = this.activityService.getGroupedActivities();
  }

  // Filterfunctie voor dropdown
  filterActivities() {
    if (this.searchTerm === '') {
      this.filteredActivities = []; // Verberg de lijst wanneer de zoekterm leeg is
    } else {
      this.filteredActivities = this.activityService.filterActivities(
        this.searchTerm
      ); // Filter op basis van de zoekterm
    }
  }

  // Selecteer een activiteit en update de zoekterm
  selectActivity(activity: Activity) {
    this.selectedActivity = activity;
    this.searchTerm = activity.Description;
    this.filteredActivities = []; // Dropdown verbergen
    this.sendActivityData(); // Data doorsturen naar parent
  }

  clearInput(): void {
    this.searchTerm = ''; // Reset de zoekterm naar een lege string
    this.filteredActivities = []; // Verberg de gefilterde activiteiten (leeg de lijst)
    this.selectedActivity = undefined; // Reset de geselect
    this.sendActivityData(); // Data doorsturen naar parent
  }

  sendActivityData() {
    const totalMinutes = this.durationMinutes + this.durationHours * 60;
    this.activityData.emit({
      activity: this.selectedActivity,
      totalMinutes: totalMinutes,
    });
  }

  decrementDurationHours() {
    if (this.durationHours > 0) {
      this.durationHours -= 1;
    }
  }
  incrementDurationMinutes() {
    this.durationMinutes += 1;
  }

  decrementDurationMinutes() {
    if (this.durationMinutes > 0) {
      this.durationMinutes -= 1;
    }
  }
  incrementDurationHours() {
    this.durationHours += 1;
  }

  // Detecteer klik buiten component om dropdown te sluiten
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    this.dropdownOpen = false;
  }

  // Voorkom dat klikken in de dropdown zelf deze sluit
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
