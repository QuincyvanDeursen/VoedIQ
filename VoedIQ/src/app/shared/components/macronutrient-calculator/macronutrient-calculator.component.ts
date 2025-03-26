import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonHoldService } from '../../services/button-hold.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-macronutrient-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './macronutrient-calculator.component.html',
  styleUrls: ['./macronutrient-calculator.component.css'],
})
export class MacronutrientCalculatorComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  tdee: number = 2000; // Default TDEE waarde (kcal)
  hasOverweight: boolean = false; // Extra input om overgewicht aan te geven

  // Gezonde ranges
  proteinPercentRange: [number, number] = [10, 35]; // Eiwitten
  fatPercentRange: [number, number] = [20, 40]; // Vet (normaal)
  fatPercentRangeOverweight: [number, number] = [20, 35]; // Vet (bij overgewicht)
  carbPercentRange: [number, number] = [40, 70]; // Koolhydraten
  saturatedFatPercentMax: number = 10; // Max verzadigd vet

  // Resultaten
  proteinRange: [number, number] = [0, 0];
  fatRange: [number, number] = [0, 0];
  carbRange: [number, number] = [0, 0];
  saturatedFatRange: [number, number] = [0, 0];

  // Vezels - vast aantal
  fiber: number = 30;

  resultsCalculated: boolean = false;

  // Constanten
  private readonly CALORIES_PER_GRAM_CARB: number = 4;
  private readonly CALORIES_PER_GRAM_PROTEIN: number = 4;
  private readonly CALORIES_PER_GRAM_FAT: number = 9;
  private readonly CALORIES_PER_GRAM_SATURATED_FAT: number = 9;

  private shouldScroll = false;
  private sectionId: string | null = null;
  copied = false; // Houdt bij of er gekopieerd is

  constructor(
    private buttonHoldService: ButtonHoldService,
    private toastService: ToastService,
    private cdr: ChangeDetectorRef
  ) {}

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

  copyToClipboard() {
    const value = this.macroDataToString();
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

  private macroDataToString(): string {
    return `
  TDEE: ${this.tdee} kcal
  Eiwitten: min. ${this.proteinRange[0]} - max. ${this.proteinRange[1]} gram
  Vet: min. ${this.fatRange[0]} - max. ${this.fatRange[1]} gram
  Koolhydraten: min. ${this.carbRange[0]} - max. ${this.carbRange[1]} gram
  Verzadigd vet: min. ${this.saturatedFatRange[0]} - max. ${this.saturatedFatRange[1]} gram
  Vezels: min. ${this.fiber} gram
    `.trim();
  }

  scrollToElement(section: string) {
    this.sectionId = section; // Onthoud naar welke sectie we willen scrollen
    this.shouldScroll = true;

    this.cdr.detectChanges(); // Forceer een DOM update
  }

  calculate() {
    const fatRange = this.hasOverweight
      ? this.fatPercentRangeOverweight
      : this.fatPercentRange;

    // Koolhydraten
    const minCarbKcal = (this.carbPercentRange[0] / 100) * this.tdee;
    const maxCarbKcal = (this.carbPercentRange[1] / 100) * this.tdee;
    this.carbRange = [
      Math.round(minCarbKcal / this.CALORIES_PER_GRAM_CARB),
      Math.round(maxCarbKcal / this.CALORIES_PER_GRAM_CARB),
    ];

    // Vet
    const minFatKcal = (fatRange[0] / 100) * this.tdee;
    const maxFatKcal = (fatRange[1] / 100) * this.tdee;
    this.fatRange = [
      Math.round(minFatKcal / this.CALORIES_PER_GRAM_FAT),
      Math.round(maxFatKcal / this.CALORIES_PER_GRAM_FAT),
    ];

    // Verzadigd vet
    const maxSaturatedFatKcal = (this.saturatedFatPercentMax / 100) * this.tdee;
    this.saturatedFatRange = [
      0,
      Math.round(maxSaturatedFatKcal / this.CALORIES_PER_GRAM_SATURATED_FAT),
    ];

    // Eiwitten
    const minProteinKcal = (this.proteinPercentRange[0] / 100) * this.tdee;
    const maxProteinKcal = (this.proteinPercentRange[1] / 100) * this.tdee;
    this.proteinRange = [
      Math.round(minProteinKcal / this.CALORIES_PER_GRAM_PROTEIN),
      Math.round(maxProteinKcal / this.CALORIES_PER_GRAM_PROTEIN),
    ];

    this.resultsCalculated = true;
    this.saveMacronutrientRanges();
    this.toastService.success('Berekening voltooid!');
  }

  retrieveInfoFromLocalStorage() {
    const storedTdee = localStorage.getItem('tdee');
    if (storedTdee !== null) {
      this.tdee = JSON.parse(storedTdee);
    }
  }

  private syncLocalStorageChanges(event: StorageEvent) {
    if (event.key === 'tdee') {
      this.tdee = JSON.parse(event.newValue || '0');
    }
  }

  private saveMacronutrientRanges() {
    localStorage.setItem('protein', JSON.stringify(this.proteinRange));
    localStorage.setItem('fat', JSON.stringify(this.fatRange));
    localStorage.setItem('carbs', JSON.stringify(this.carbRange));
    localStorage.setItem(
      'saturatedFatRange',
      JSON.stringify(this.saturatedFatRange)
    );
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
