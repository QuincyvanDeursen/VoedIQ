import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonHoldService {
  private interval: any;

  adjustValue(
    obj: any,
    field: string,
    change: number,
    min: number = 0,
    decimalPlaces: number
  ): void {
    if (obj[field] === null || obj[field] === undefined) obj[field] = 0;

    // Bereken de nieuwe waarde na de verandering
    let newValue = obj[field] + change;

    // Zorg ervoor dat de waarde niet onder de minimum komt
    newValue = Math.max(min, newValue);

    // Dynamisch afronden naar het opgegeven aantal decimalen
    const factor = Math.pow(10, decimalPlaces); // factor is 10 voor 1 decimaal, 100 voor 2 decimalen, etc.
    obj[field] = Math.round(newValue * factor) / factor;
  }

  startAdjusting(
    obj: any,
    field: string,
    change: number,
    min: number = 0,
    decimalPlaces: number
  ): void {
    this.adjustValue(obj, field, change, min, decimalPlaces);
    this.interval = setInterval(
      () => this.adjustValue(obj, field, change, min, decimalPlaces),
      100
    );
  }

  stopAdjusting(): void {
    clearInterval(this.interval);
  }
}
