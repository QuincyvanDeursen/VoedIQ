import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { ButtonHoldService } from '../../services/button-hold.service';

@Component({
  selector: 'app-bmr-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.css'],
})
export class BmrCalculatorComponent {
  gender: string = 'male';
  age: number | null = 30;
  weight: number | null = 50;
  height: number | null = 150;
  bmr: number | null = null;
  private interval: any;

  constructor(
    private toastService: ToastService,
    private buttonHoldService: ButtonHoldService
  ) {}

  calculateBMR(): void {
    if (!this.validateForm()) return;

    if (this.gender === 'male') {
      this.bmr = Math.round(
        10 * this.weight! + 6.25 * this.height! - 5 * this.age! + 5
      );
    }

    if (this.gender === 'female') {
      this.bmr = Math.round(
        10 * this.weight! + 6.25 * this.height! - 5 * this.age! - 161
      );
    }
    if (this.bmr == null) {
      this.toastService.error(
        'Er is iets misgegaan bij het berekenen van de BMR'
      );
      return;
    }
    this.updateBMR(this.bmr);
    this.toastService.success('Berekening voltooid!');
  }

  private updateBMR(value: number) {
    localStorage.setItem('bmr', JSON.stringify(value));

    // Manueel een StorageEvent aanmaken en dispatchen
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'bmr',
        newValue: JSON.stringify(value),
      })
    );
  }

  private validateForm(): boolean {
    if (this.age === null || this.age <= 0) {
      this.toastService.warning('Vul leeftijd in');
      return false;
    }

    if (this.weight === null || this.weight <= 0) {
      this.toastService.warning('Vul gewicht in');
      return false;
    }

    if (this.height === null || this.height <= 0) {
      this.toastService.warning('Vul lengte in');
      return false;
    }

    return true;
  }

  ///////////////////////////////////////////////////////////////////
  /////////////////////////// button hold  //////////////////////////
  ///////////////////////////////////////////////////////////////////

  startAdjusting(field: string, change: number, decimalPlaces: number): void {
    this.buttonHoldService.startAdjusting(
      this,
      field,
      change,
      0,
      decimalPlaces
    );
  }

  stopAdjusting(): void {
    this.buttonHoldService.stopAdjusting();
  }
}
