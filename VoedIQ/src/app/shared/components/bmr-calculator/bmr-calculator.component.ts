import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { ButtonHoldService } from '../../services/button-hold.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-bmr-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.css'],
})
export class BmrCalculatorComponent implements AfterViewChecked, OnInit {
  gender: string = 'male';
  age: number | null = 30;
  weight: number | null = 50;
  height: number | null = 150;
  bmr: number | null = null;
  private shouldScroll = false;
  private sectionId: string | null = null;
  copied = false; // Houdt bij of er gekopieerd is

  constructor(
    private toastService: ToastService,
    private buttonHoldService: ButtonHoldService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.loadDataFromLocalStorage();
  }

  scrollToElement(section: string) {
    this.sectionId = section; // Onthoud naar welke sectie we willen scrollen
    this.shouldScroll = true;

    this.cdr.detectChanges(); // Forceer een DOM update
  }

  ngAfterViewChecked() {
    if (this.shouldScroll && this.sectionId) {
      setTimeout(() => {
        if (!this.sectionId) return; // Als de sectie ondertussen gereset is, stop met scroll
        const element = document.getElementById(this.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          console.warn(`Element met ID '${this.sectionId}' niet gevonden.`);
        }
        this.shouldScroll = false;
        this.sectionId = null; // Reset de sectie na scrollen
      }, 100); // 100ms wacht zodat de DOM echt geladen is
    }
  }

  copyToClipboard(value: number) {
    navigator.clipboard
      .writeText(value.toString())
      .then(() => {
        this.copied = true; // Zet de melding aan
        setTimeout(() => (this.copied = false), 2000); // Verberg na 2 sec
      })
      .catch((err) => {
        console.error('Fout bij kopiëren:', err);
      });
  }

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
    this.saveLengthToLocalStorage();
    this.saveWeightToLocalStorage();
    this.saveAgeToLocalStorage();
    this.toastService.success('Berekening voltooid!');
  }

  private saveLengthToLocalStorage() {
    if (this.height) {
      localStorage.setItem('length', JSON.stringify(this.height));
    }
  }
  private saveWeightToLocalStorage() {
    if (this.weight) {
      localStorage.setItem('weight', JSON.stringify(this.weight));
    }
  }

  private saveAgeToLocalStorage() {
    if (this.age) {
      localStorage.setItem('age', JSON.stringify(this.age));
    }
  }

  private loadDataFromLocalStorage() {
    const storedLength = localStorage.getItem('length');
    const storedWeight = localStorage.getItem('weight');
    const storedAge = localStorage.getItem('age');

    if (storedLength) {
      this.height = JSON.parse(storedLength);
    }
    if (storedWeight) {
      this.weight = JSON.parse(storedWeight);
    }
    if (storedAge) {
      this.age = JSON.parse(storedAge);
    }
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
