import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { ButtonHoldService } from '../../services/button-hold.service';

@Component({
  selector: 'app-tdee-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './tdee-calculator.component.html',
  styleUrls: ['./tdee-calculator.component.css'],
})
export class TdeeCalculatorComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  bmr: number = 1500; // Default waarde
  pal: number = 1.2; // Default waarde
  tdee: number | null = null;
  isVisible: boolean = false;

  private shouldScroll = false;
  private sectionId: string | null = null;
  copied = false; // Houdt bij of er gekopieerd is

  constructor(
    private cdr: ChangeDetectorRef,
    private toastService: ToastService,
    private buttonHoldService: ButtonHoldService
  ) {}

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
        this.toastService.error('Kopiëren mislukt');
      });
  }

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
