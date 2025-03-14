import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import activities from '../../../assets/data/activities.json'; // 🔥 Directe import

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activityList: Activity[] = []; // De lijst met alle activiteiten
  private groupedActivities: any = {}; // De activiteiten gegroepeerd per categorie

  constructor() {
    this.activityList = activities; // Stel de lijst van activiteiten in
    this.groupedActivities = this.groupActivitiesByCategory(this.activityList); // Groepeer de activiteiten
  }

  // Groeperen van activiteiten op basis van de categorie
  private groupActivitiesByCategory(activities: Activity[]): any {
    const grouped: any = {};
    activities.forEach((activity) => {
      const category = activity.Category;
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(activity);
    });
    return grouped;
  }

  // Filter activiteiten op basis van de zoekterm
  filterActivities(searchTerm: string): any {
    const filteredActivities: any = [];

    if (!searchTerm || searchTerm.trim() === '') {
      return this.activityList; // Als er geen zoekterm is, geef alle activiteiten terug
    }

    // Filter activiteiten waarvan de omschrijving de zoekterm bevat
    this.activityList.forEach((activity) => {
      if (
        activity.Description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        filteredActivities.push(activity);
      }
    });

    return filteredActivities; // Retourneer de gefilterde activiteiten
  }

  // Haal alle gegroepeerde activiteiten op
  getGroupedActivities(): any {
    return this.groupedActivities;
  }
}
