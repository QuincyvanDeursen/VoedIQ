import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { ButtonHoldService } from '../../services/button-hold.service';

@Component({
  selector: 'app-tdee-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './tdee-calculator.component.html',
  styleUrls: ['./tdee-calculator.component.css'],
})
export class TdeeCalculatorComponent implements OnInit, OnDestroy {
  bmr: number = 1500; // Default waarde
  pal: number = 1.2; // Default waarde
  tdee: number | null = null;
  isVisible: boolean = false;

  constructor(
    private router: Router,
    private toastService: ToastService,
    private buttonHoldService: ButtonHoldService
  ) {}

  ngOnInit(): void {
    this.retrieveInfoFromLocalStorage();
    window.addEventListener('storage', this.syncLocalStorageChanges.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener(
      'storage',
      this.syncLocalStorageChanges.bind(this)
    );
  }

  calculateTDEE() {
    if (!this.validateForm()) {
      return;
    }

    // Bereken TDEE
    this.tdee = this.bmr * this.pal;

    // Ronden naar het dichtstbijzijnde gehele getal
    this.tdee = Math.round(this.tdee);

    this.isVisible = true;
    this.updateTDEE(this.tdee);
    this.toastService.success('Berekening voltooid!');
  }

  private validateForm(): boolean {
    if (this.bmr === null || this.bmr <= 0) {
      this.toastService.warning('Vul BMR in');
      return false;
    }
    if (this.pal === null || this.pal <= 0) {
      this.toastService.warning('Vul PAL in');
      return false;
    }
    return true;
  }

  private updateTDEE(value: number) {
    localStorage.setItem('tdee', JSON.stringify(value));

    // Manueel een StorageEvent aanmaken en dispatchen
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'tdee',
        newValue: JSON.stringify(value),
      })
    );
  }

  retrieveInfoFromLocalStorage() {
    const storedBmr = localStorage.getItem('bmr');
    const storedPal = localStorage.getItem('pal');

    if (storedBmr !== null) {
      this.bmr = JSON.parse(storedBmr);
    }

    if (storedPal !== null) {
      this.pal = JSON.parse(storedPal);
    }
  }

  private syncLocalStorageChanges(event: StorageEvent) {
    if (event.key === 'bmr') {
      this.bmr = JSON.parse(event.newValue || '0');
    }

    if (event.key === 'pal') {
      this.pal = JSON.parse(event.newValue || '1.2');
    }
  }

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
