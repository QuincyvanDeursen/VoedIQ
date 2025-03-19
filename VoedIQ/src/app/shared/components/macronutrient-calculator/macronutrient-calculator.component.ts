import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonHoldService } from '../../services/button-hold.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-macronutrient-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './macronutrient-calculator.component.html',
  styleUrls: ['./macronutrient-calculator.component.css'],
})
export class MacronutrientCalculatorComponent implements OnInit, OnDestroy {
  tdee: number = 2000; // Default TDEE waarde (kcal)

  // Gezonde range voor eiwitten, vetten en koolhydraten
  proteinPercentRange: [number, number] = [10, 35]; // Gezonde range voor eiwitten
  fatPercentRange: [number, number] = [20, 40]; // Gezonde range voor totaal vet
  carbPercentRange: [number, number] = [40, 70]; // Gezonde range voor koolhydraten
  saturatedFatPercentMax: number = 10; // Maximaal percentage voor verzadigd vet

  // Resultaten voor berekende macronutriënten
  proteinRange: [number, number] = [0, 0];
  fatRange: [number, number] = [0, 0];
  carbRange: [number, number] = [0, 0];
  saturatedFatRange: [number, number] = [0, 0];

  // Vezels - vast aantal
  fiber: number = 30;

  // Toon resultaten pas na berekening
  resultsCalculated: boolean = false;

  // Constanten voor de calorieën per gram van elk macronutriënt
  private readonly CALORIES_PER_GRAM_CARB: number = 4;
  private readonly CALORIES_PER_GRAM_PROTEIN: number = 4;
  private readonly CALORIES_PER_GRAM_FAT: number = 9;
  private readonly CALORIES_PER_GRAM_SATURATED_FAT: number = 9;

  constructor(
    private buttonHoldService: ButtonHoldService,
    private toastService: ToastService
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

  calculateHealthyRanges() {
    // Koolhydraten
    const minCarbKcal = (this.carbPercentRange[0] / 100) * this.tdee;
    const maxCarbKcal = (this.carbPercentRange[1] / 100) * this.tdee;
    this.carbRange = [
      Math.round(minCarbKcal / this.CALORIES_PER_GRAM_CARB),
      Math.round(maxCarbKcal / this.CALORIES_PER_GRAM_CARB),
    ];

    // Vet (totaal vet)
    const minFatKcal = (this.fatPercentRange[0] / 100) * this.tdee;
    const maxFatKcal = (this.fatPercentRange[1] / 100) * this.tdee;
    this.fatRange = [
      Math.round(minFatKcal / this.CALORIES_PER_GRAM_FAT),
      Math.round(maxFatKcal / this.CALORIES_PER_GRAM_FAT),
    ];

    // Verzadigd vet (max 10%)
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

    // Resultaten zijn berekend
    this.resultsCalculated = true;
    this.saveMacronutrientRanges();
    this.toastService.success('Berekening voltooid!');
  }

  retrieveInfoFromLocalStorage() {
    const storedBmr = localStorage.getItem('tdee');

    if (storedBmr !== null) {
      this.tdee = JSON.parse(storedBmr);
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
