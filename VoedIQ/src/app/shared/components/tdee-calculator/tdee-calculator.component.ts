import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

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
  private interval: any; // Timer voor het ingedrukt houden van de knoppen

  constructor(private router: Router, private toastService: ToastService) {}

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

    this.tdee = this.bmr * this.pal;
    this.isVisible = true;

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

  updateTDEE(value: number) {
    localStorage.setItem('tdee', JSON.stringify(value));

    // Manueel een StorageEvent aanmaken en dispatchen
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'tdee',
        newValue: JSON.stringify(value),
      })
    );
  }

  navigateToBmr() {
    this.router.navigate(['/bmr-calculator']);
  }

  navigateToPal() {
    this.router.navigate(['/pal-calculator']);
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

  syncLocalStorageChanges(event: StorageEvent) {
    if (event.key === 'bmr') {
      this.bmr = JSON.parse(event.newValue || '0');
    }

    if (event.key === 'pal') {
      this.pal = JSON.parse(event.newValue || '1.2');
    }
  }

  startAdjusting(event: Event, field: 'bmr' | 'pal', change: number) {
    event.preventDefault();
    this.adjustValue(field, change);
    this.interval = setInterval(() => this.adjustValue(field, change), 100);
  }

  stopAdjusting() {
    clearInterval(this.interval);
  }

  private adjustValue(field: 'bmr' | 'pal', change: number) {
    if (field === 'bmr') {
      this.bmr = Math.max(0, this.bmr + change);
      localStorage.setItem('bmr', JSON.stringify(this.bmr));
    } else if (field === 'pal') {
      this.pal = Math.max(
        1.2,
        Math.min(2.5, Number((this.pal + change).toFixed(1)))
      );
      localStorage.setItem('pal', JSON.stringify(this.pal));
    }
  }
}
