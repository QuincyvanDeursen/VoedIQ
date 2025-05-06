import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  userName: string = '';
  carbsMin: number = 0;
  carbsMax: number = 0;
  proteinMin: number = 0;
  proteinMax: number = 0;
  fatMin: number = 0;
  fatMax: number = 0;
  tdee: number = 0;
  pal: number = 0;
  bmr: number = 0;
  course: string = '';
  module: string = '';
  lesson: string = '';

  greeting: string = this.setGreeting();

  ngOnInit() {
    this.retrieveLocalStorageData();
  }

  retrieveLocalStorageData() {
    this.userName = localStorage.getItem('userName') || '';
    var carbs = JSON.parse(localStorage.getItem('carbs') || '[]');
    this.carbsMin = carbs[0];
    this.carbsMax = carbs[1];
    var protein = JSON.parse(localStorage.getItem('protein') || '[]');
    this.proteinMin = protein[0];
    this.proteinMax = protein[1];
    var fat = JSON.parse(localStorage.getItem('fat') || '[]');
    this.fatMin = fat[0];
    this.fatMax = fat[1];
    this.tdee = Number(localStorage.getItem('tdee')) || 0;
    this.pal = Number(localStorage.getItem('pal')) || 0;
    this.bmr = Number(localStorage.getItem('bmr')) || 0;
    this.course = localStorage.getItem('currentCourseTitle') || '';
    this.module = localStorage.getItem('currentModuleTitle') || '';
    this.lesson = localStorage.getItem('currentLessonUrl') || '';
  }

  updateUserName() {
    localStorage.removeItem('userName');
    this.userName = this.userName.trim();
    if (this.userName.length === 0) {
      this.userName = '';
      return;
    }

    localStorage.setItem('userName', this.userName);
  }

  private setGreeting(): string {
    const hour = new Date().getHours();
    return ['Goedenacht', 'Goedemorgen', 'Goedemiddag', 'Goedenavond'][
      hour < 5 ? 0 : hour < 12 ? 1 : hour < 18 ? 2 : 3
    ];
  }
}
