import { Component } from '@angular/core';
import { MacronutrientCalculatorComponent } from '../../shared/components/macronutrient-calculator/macronutrient-calculator.component';
import { MicronutrientCalculatorComponent } from '../../shared/components/micronutrient-calculator/micronutrient-calculator.component';
import { CommonModule } from '@angular/common';
import { ScrollToDirective } from '../../shared/directives/scroll-to.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-macro-micro-nutri-calculators',
  imports: [
    MacronutrientCalculatorComponent,
    MicronutrientCalculatorComponent,
    CommonModule,
    ScrollToDirective,
    RouterModule,
  ],
  templateUrl: './macro-micro-nutri-calculators.component.html',
  styleUrl: './macro-micro-nutri-calculators.component.css',
})
export class MacroMicroNutriCalculatorsComponent {
  activeStep = 1; // Houdt de actieve stap bij

  isCollapseOpen = false; // Standaard staat de collapse gesloten

  toggleCollapse() {
    this.isCollapseOpen = !this.isCollapseOpen; // Toggle de open/gesloten toestand
  }

  setActiveStep(step: number) {
    this.activeStep = step;
    this.isCollapseOpen = false; // Sluit de collapse als je naar een andere stap gaat
  }

  goToNextStep() {
    if (this.activeStep < 2) {
      this.activeStep++;
    }
    this.isCollapseOpen = false; // Sluit de collapse als je naar de volgende stap gaat
  }

  scrollToElement(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Zorgt voor een soepele scroll
        block: 'start', // Zorgt ervoor dat de sectie in het midden van het scherm komt
      });
    }
  }
}
