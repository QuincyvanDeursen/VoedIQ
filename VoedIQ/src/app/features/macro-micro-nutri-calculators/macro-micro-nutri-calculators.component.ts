import { Component } from '@angular/core';
import { MacronutrientCalculatorComponent } from '../../shared/components/macronutrient-calculator/macronutrient-calculator.component';
import { MicronutrientCalculatorComponent } from '../../shared/micronutrient-calculator/micronutrient-calculator.component';

@Component({
  selector: 'app-macro-micro-nutri-calculators',
  imports: [MacronutrientCalculatorComponent, MicronutrientCalculatorComponent],
  templateUrl: './macro-micro-nutri-calculators.component.html',
  styleUrl: './macro-micro-nutri-calculators.component.css',
})
export class MacroMicroNutriCalculatorsComponent {}
