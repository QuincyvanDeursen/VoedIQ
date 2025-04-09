import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TargetWeightTimeCalculatorComponent } from '../../shared/components/target-weight-time-calculator/target-weight-time-calculator.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-target-weight-calculator',
  imports: [CommonModule, TargetWeightTimeCalculatorComponent, RouterModule],
  templateUrl: './target-weight-calculator.component.html',
  styleUrl: './target-weight-calculator.component.css',
})
export class TargetWeightCalculatorComponent {
  activeStep = 1; // Houdt de actieve stap bij
  isCollapseOpen = false; // Standaard staat de collapse gesloten
  setActiveStep(step: number) {
    this.activeStep = step;
    this.isCollapseOpen = false; // Sluit de collapse als je naar een andere stap gaat
  }

  toggleCollapse() {
    this.isCollapseOpen = !this.isCollapseOpen; // Toggle de open/gesloten toestand
  }
}
