import { Component } from '@angular/core';
import { BmrCalculatorComponent } from '../../shared/components/bmr-calculator/bmr-calculator.component';
import { PalCalculatorComponent } from '../../shared/components/pal-calculator/pal-calculator.component';
import { TdeeCalculatorComponent } from '../../shared/components/tdee-calculator/tdee-calculator.component';
import { CommonModule } from '@angular/common';
import { ScrollToDirective } from '../../shared/directives/scroll-to.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-energy-calculators',
  imports: [
    BmrCalculatorComponent,
    PalCalculatorComponent,
    TdeeCalculatorComponent,
    CommonModule,
    ScrollToDirective,
    RouterModule,
  ],
  templateUrl: './energy-calculators.component.html',
  styleUrl: './energy-calculators.component.css',
})
export class EnergyCalculatorsComponent {
  activeStep = 1; // Houdt de actieve stap bij

  setActiveStep(step: number) {
    this.activeStep = step;
    this.isCollapseOpen = false; // Sluit de collapse als je naar een andere stap gaat
  }

  goToNextStep() {
    if (this.activeStep < 3) {
      this.activeStep++;
    }
    this.isCollapseOpen = false; // Sluit de collapse als je naar de volgende stap gaat
  }

  isCollapseOpen = false; // Standaard staat de collapse gesloten

  toggleCollapse() {
    this.isCollapseOpen = !this.isCollapseOpen; // Toggle de open/gesloten toestand
  }
}
