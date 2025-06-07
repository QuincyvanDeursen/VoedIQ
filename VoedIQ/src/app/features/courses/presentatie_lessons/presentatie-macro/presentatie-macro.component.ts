import { Component } from '@angular/core';
import { MicronutrientCalculatorComponent } from '../../../../shared/components/micronutrient-calculator/micronutrient-calculator.component';
import { MacronutrientCalculatorComponent } from '../../../../shared/components/macronutrient-calculator/macronutrient-calculator.component';

@Component({
  selector: 'app-presentatie-macro',
  imports: [MicronutrientCalculatorComponent, MacronutrientCalculatorComponent],
  templateUrl: './presentatie-macro.component.html',
  styleUrl: './presentatie-macro.component.css',
})
export class PresentatieMacroComponent {}
