import { Injectable } from '@angular/core';
import facts from '../../../assets/data/facts.json'; // 🔥 Direct import

@Injectable({
  providedIn: 'root',
})
export class FactService {
  private factList: string[] = facts; // Simpele lijst van feitjes

  constructor() {}

  // Geef alle feitjes terug
  getFacts(): string[] {
    return this.factList;
  }

  // Optioneel: random feitje
  getRandomFact(): string {
    const index = Math.floor(Math.random() * this.factList.length);
    return this.factList[index];
  }
}
