import { Component, OnInit } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { CommonModule } from '@angular/common';

import { TargetWeightTimeCalculatorComponent } from '../../../../shared/components/target-weight-time-calculator/target-weight-time-calculator.component';

@Component({
  selector: 'app-afvallen-deficit',
  imports: [
    InfoBlockComponent,
    CommonModule,
    TargetWeightTimeCalculatorComponent,
  ],
  templateUrl: './afvallen-deficit.component.html',
})
export class AfvallenDeficitComponent implements OnInit {
  tdee = 0;
  theoreticFatLoss = 0;

  ngOnInit(): void {
    this.getDataFromLocalStorage();
    this.calculatorFatLoss();
  }

  getDataFromLocalStorage() {
    const tdeeData = localStorage.getItem('tdee');
    if (tdeeData) {
      this.tdee = JSON.parse(tdeeData);
    }
  }

  calculatorFatLoss() {
    const tdee = this.tdee;
    const fatLoss = 7700 / tdee;
    this.theoreticFatLoss = Math.round(fatLoss);
  }
}
