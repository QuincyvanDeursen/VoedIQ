import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { card } from '../../shared/components/card/card.component';
import { ScrollToDirective } from '../../shared/directives/scroll-to.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, card, ScrollToDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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

  greeting: string = this.setGreeting();

  ngOnInit() {
    this.retrieveLocalStorageData();
  }

  private setGreeting(): string {
    const hour = new Date().getHours();
    return ['Goedenacht', 'Goedemorgen', 'Goedemiddag', 'Goedenavond'][
      hour < 5 ? 0 : hour < 12 ? 1 : hour < 18 ? 2 : 3
    ];
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
  }
}
