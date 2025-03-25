import { Component } from '@angular/core';
import { BmrCalculatorComponent } from '../../shared/components/bmr-calculator/bmr-calculator.component';
import { PalCalculatorComponent } from '../../shared/components/pal-calculator/pal-calculator.component';
import { TdeeCalculatorComponent } from '../../shared/components/tdee-calculator/tdee-calculator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-energy-calculators',
  imports: [
    BmrCalculatorComponent,
    PalCalculatorComponent,
    TdeeCalculatorComponent,
    CommonModule,
  ],
  templateUrl: './energy-calculators.component.html',
  styleUrl: './energy-calculators.component.css',
})
export class EnergyCalculatorsComponent {}
