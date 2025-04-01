import { CommonModule } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { ButtonHoldService } from '../../services/button-hold.service';

@Component({
  selector: 'app-micronutrient-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './micronutrient-calculator.component.html',
  styleUrl: './micronutrient-calculator.component.css',
})
export class MicronutrientCalculatorComponent implements AfterViewChecked {
  // Gebruikersinput
  age: number = 30;
  sex: 'male' | 'female' = 'male';
  tdee: number = 2500; // Totale dagelijkse energiebehoefte in kcal

  // Vrouw-gerelateerde opties (worden alleen getoond als sex === 'female')
  isPregnant: boolean = false; // Vrouwen die momenteel zwanger zijn
  isPlanningPregnancy: boolean = false; // Vrouwen die zwanger willen worden (eerste 10 weken)
  isBreastfeeding: boolean = false; // Vrouwen die borstvoeding geven
  isMenopausal: boolean = false; // Vrouwen na overgang (postmenopauzaal)

  // Overige algemene opties
  hasDarkSkin: boolean = false;
  staysIndoors: boolean = false;
  isVegan: boolean = false;
  takesMedication: boolean = false;

  // Flag: Resultaten pas tonen nadat op de berekenknop is geklikt
  calculationDone: boolean = false;

  // Dynamisch berekende suppletieadvies
  // (Extra suppletieadvies wordt voor andere vitamines berekend, maar voor IJzer wordt niets extra toegevoegd)
  recommendedSupplements: { name: string; amount: string; reason: string }[] =
    [];

  // Vaste ADH/AI en AB voor vitaminen per geslacht.
  // Voor Vitamine B1 en B3 worden de waarden later op basis van TDEE berekend.
  vitamins = {
    male: [
      { name: 'Vitamine A', adh: '800 µg', ab: '3000 µg' },
      { name: 'Vitamine D', adh: '10 µg', ab: '100 µg' }, // dynamisch: 10 µg of 20 µg
      { name: 'Vitamine E', adh: '13 mg', ab: '300 mg' },
      { name: 'Vitamine K', adh: '70 µg', ab: 'Geen' },
      { name: 'Vitamine B1', adh: '', ab: 'Geen' }, // op basis van TDEE
      { name: 'Vitamine B2', adh: '1,6 mg', ab: 'Geen' },
      { name: 'Vitamine B3', adh: '', ab: '10-900 mg' }, // op basis van TDEE
      { name: 'Vitamine B5', adh: '5 mg', ab: 'Geen' },
      { name: 'Vitamine B6', adh: '1,5 mg', ab: '12 mg' }, // dynamisch: 1,5 mg of 1,8 mg
      { name: 'Vitamine B8', adh: '40 µg', ab: 'Geen' },
      { name: 'Vitamine B11', adh: '300 µg', ab: '1000 µg' },
      { name: 'Vitamine B12', adh: '2,8 µg', ab: 'Geen' },
      { name: 'Vitamine C', adh: '75 mg', ab: 'Geen' },
      { name: 'Choline', adh: '400 mg', ab: '3500 mg' },
    ],
    female: [
      { name: 'Vitamine A', adh: '680 µg', ab: '3000 µg' },
      { name: 'Vitamine D', adh: '10 µg', ab: '100 µg' }, // dynamisch
      { name: 'Vitamine E', adh: '11 mg', ab: '300 mg' },
      { name: 'Vitamine K', adh: '70 µg', ab: 'Geen' },
      { name: 'Vitamine B1', adh: '', ab: 'Geen' }, // op basis van TDEE
      { name: 'Vitamine B2', adh: '1,6 mg', ab: 'Geen' }, // later: zwanger 1,9, borstvoeding 1,7
      { name: 'Vitamine B3', adh: '-', ab: '10NZ-900NA mg' }, // op basis van TDEE
      { name: 'Vitamine B5', adh: '5 mg', ab: 'Geen' },
      { name: 'Vitamine B6', adh: '1,5 mg', ab: '12 mg' }, // later: zwanger 1,8, borstvoeding 1,9, anders afhankelijk van leeftijd
      { name: 'Vitamine B8', adh: '40 µg', ab: 'Geen' }, // later: borstvoeding 45 µg
      { name: 'Vitamine B11', adh: '300 µg', ab: '1000 µg' }, // later: zwanger/borstvoeding 400 µg
      { name: 'Vitamine B12', adh: '2,8 µg', ab: 'Geen' }, // later: zwanger 3,3, borstvoeding 3,8
      { name: 'Vitamine C', adh: '75 mg', ab: 'Geen' },
      { name: 'Choline', adh: '400 mg', ab: '3500 mg' },
    ],
  };

  // Vaste ADH/AI en AB voor mineralen per geslacht.
  // Voor Calcium en andere waarden worden de ADH dynamisch aangepast.
  minerals = {
    male: [
      { name: 'Calcium', adh: '1000 mg', ab: '2500 mg' },
      { name: 'Chloride', adh: '2,3 g', ab: '3,6 g' },
      { name: 'Fosfor', adh: '550 mg', ab: 'Geen' },
      { name: 'IJzer', adh: '11 mg', ab: '40 mg' },
      { name: 'Jodium', adh: '150 µg', ab: '600 µg' },
      { name: 'Kalium', adh: '3500 mg', ab: 'Geen' },
      { name: 'Koper', adh: '0,9 mg', ab: '5 mg' },
      { name: 'Mangaan', adh: '3 mg', ab: '8 mg' },
      { name: 'Magnesium', adh: '350 mg', ab: '250 mg (voor supplementen)' },
      { name: 'Molybdeen', adh: '65 µg', ab: '600 µg' },
      { name: 'Natrium', adh: '1,5 g', ab: '2,4 g' },
      { name: 'Selenium', adh: '70 µg', ab: '255 µg' },
      { name: 'Zink', adh: '9 mg', ab: '25 mg' },
    ],
    female: [
      { name: 'Calcium', adh: '1000 mg', ab: '2500 mg' }, // dynamisch: 950/1100/1200 mg
      { name: 'Chloride', adh: '2,3', ab: '3,6 g' },
      { name: 'Fosfor', adh: '550 mg', ab: 'Geen' }, // bij borstvoeding: 900 mg
      { name: 'IJzer', adh: '16 mg', ab: '40 mg' }, // dynamisch: 16 mg pre, 15 mg bij borstvoeding, 11 mg post
      { name: 'Jodium', adh: '150 µg', ab: '600 µg' }, // bij zwangerschap/borstvoeding: 200 µg
      { name: 'Kalium', adh: '3500 mg', ab: 'Geen' }, // bij borstvoeding: 3100 mg
      { name: 'Koper', adh: '0,9 mg', ab: '5 mg' },
      { name: 'Mangaan', adh: '3 mg', ab: '8 mg' },
      { name: 'Magnesium', adh: '300 mg', ab: '250 mg (voor supplementen)' }, // bij borstvoeding: 280 mg
      { name: 'Molybdeen', adh: '65 µg', ab: '600 µg' },
      { name: 'Natrium', adh: '1,5 g', ab: '2,4 g' },
      { name: 'Selenium', adh: '70 µg', ab: '255 µg' },
      { name: 'Zink', adh: '7 mg', ab: '25 mg' },
    ],
  };

  // Voor de input-group knoppen
  adjustingInterval: any;

  private shouldScroll = false;
  private sectionId: string | null = null;
  copied = false; // Houdt bij of er gekopieerd is

  constructor(
    private toastService: ToastService,
    private cdr: ChangeDetectorRef,
    private buttonHoldSerivce: ButtonHoldService
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

  copyToClipboard() {
    const value = this.vitaminAndMineralDataToString();
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

  private vitaminAndMineralDataToString(): string {
    let result = 'Vitaminen:\n';
    for (const vitamin of this.vitamins[this.sex]) {
      result += `${vitamin.name}: ADH ${vitamin.adh}, AB ${vitamin.ab}\n`;
    }

    result += '\nMineralen:\n';
    for (const mineral of this.minerals[this.sex]) {
      result += `${mineral.name}: ADH ${mineral.adh}, AB ${mineral.ab}\n`;
    }

    if (this.recommendedSupplements.length > 0) {
      result += '\nAanbevolen supplementen:\n';
      for (const supplement of this.recommendedSupplements) {
        result += `${supplement.name}: ${supplement.amount} (${supplement.reason})\n`;
      }
    }

    return result;
  }

  scrollToElement(section: string) {
    this.sectionId = section; // Onthoud naar welke sectie we willen scrollen
    this.shouldScroll = true;

    this.cdr.detectChanges(); // Forceer een DOM update
  }

  private syncLocalStorageChanges(event: StorageEvent) {
    if (event.key === 'tdee') {
      this.tdee = JSON.parse(event.newValue || '0');
    }
  }

  private retrieveInfoFromLocalStorage() {
    const storedTdee = localStorage.getItem('tdee');
    if (storedTdee !== null) {
      this.tdee = JSON.parse(storedTdee);
    }
  }

  ////////////////////////////////////////////////////
  //////////////// Hoofd Methoden /////////////////////
  ////////////////////////////////////////////////////

  calculate(): void {
    // Validate form input
    if (!this.validateForm()) return;

    //vitamins
    this.updateVitaminB1();
    this.updateVitaminB2();
    this.updateVitaminB3();
    this.updateVitaminB5();
    this.updateVitaminB6();
    this.updateVitaminB8();
    this.updateVitaminB11();
    this.updateVitaminB12();
    this.updateVitaminC();
    this.updateCholine();
    this.updateVitaminA();
    this.updateVitaminD();
    this.updateVitaminE();
    this.updateVitaminK();

    //minerals
    this.updateCalcium();
    this.updateChloride();
    this.updatePhosphorus();
    this.updateIron();
    this.updateIdodine();
    this.updatePotassium();
    this.updateCoppper();
    this.updateManganese();
    this.updateMagnesium();
    this.updateMolybdeen();
    this.updateSodium();
    this.updateSelenium();
    this.updateZinc();

    // Add general supplement recommendations
    this.addSupplementRecommendation();
    this.saveNutrientDataToLocalStorage();

    this.calculationDone = true;
    this.toastService.success('Berekening voltooid');
  }

  private validateForm(): boolean {
    // Check if age is a valid number
    if (isNaN(this.age) || this.age < 18) {
      this.toastService.warning('Vul een geldige leeftijd in');
      return false;
    }

    // Check if TDEE is a valid number
    if (isNaN(this.tdee) || this.tdee <= 0) {
      this.toastService.warning('Vul een geldige TDEE in');
      return false;
    }

    return true;
  }

  ////////////////////////////////////////////////////
  //////////////// Hulp Methoden /////////////////////
  ////////////////////////////////////////////////////

  private saveNutrientDataToLocalStorage(): void {
    const nutrientData = {
      vitamins: this.vitamins[this.sex],
      minerals: this.minerals[this.sex],
    };

    localStorage.setItem('micronutrient', JSON.stringify(nutrientData));
  }

  private updateVitamin(name: string, adh: string): void {
    this.vitamins[this.sex].forEach((vitamin) => {
      if (vitamin.name === name) {
        vitamin.adh = adh;
      }
    });
  }

  private UpdateMineral(name: string, adh: string): void {
    this.minerals[this.sex].forEach((mineral) => {
      if (mineral.name === name) {
        mineral.adh = adh;
      }
    });
  }

  private updateVitaminB1(): void {
    // Calculate Vitamin B1 based on TDEE
    const b1MJ = 0.1; // mg/MJ
    const b1Day = (b1MJ * this.tdee) / 239; // A day
    const b1Str = b1Day.toFixed(2) + ' mg'; // string

    this.updateVitamin('Vitamine B1', b1Str);
  }

  private updateVitaminB2(): void {
    if (this.sex == 'male') return; // No adjustment for males
    const base = '1,6 mg';
    const adh = this.isBreastfeeding
      ? '1,7 mg'
      : this.isPregnant
      ? '1,9 mg'
      : base;
    this.updateVitamin('Vitamine B2', adh);
  }

  private updateVitaminB3(): void {
    // Calculate Vitamin B3 based on TDEE
    const b3MJ = 1.6; // mg/MJ
    const b3Day = (b3MJ * this.tdee) / 239; // A day
    const b3Str = b3Day.toFixed(2) + ' mg'; // string

    this.updateVitamin('Vitamine B3', b3Str);
  }

  private updateVitaminB5(): void {
    if (this.sex == 'male') return; // No adjustment
    const adh = this.isBreastfeeding ? '7 mg' : '5 mg';
    this.updateVitamin('Vitamine B5', adh);
  }

  private updateVitaminB6(): void {
    if (
      (this.sex === 'male' && this.age < 51) ||
      (this.sex === 'female' && !this.isPregnant && !this.isBreastfeeding)
    ) {
      return;
    }

    const adh =
      this.sex === 'male' ? '1,8 mg' : this.isPregnant ? '1,8 mg' : '1,9 mg';
    this.updateVitamin('Vitamine B6', adh);
  }

  private updateVitaminB8(): void {
    const adh = this.isBreastfeeding ? '45 µg' : '40 µg';
    this.updateVitamin('Vitamine B8', adh);
  }

  private updateVitaminB11(): void {
    if (!this.isPregnant && !this.isBreastfeeding) {
      return;
    }

    const adh = '400 µg';
    this.updateVitamin('Vitamine B11', adh);
  }

  private updateVitaminB12(): void {
    if (!this.isPregnant && !this.isBreastfeeding) {
      return;
    }

    const adh = this.isPregnant ? '3,3 µg' : '3,8 µg';
    this.updateVitamin('Vitamine B12', adh);
  }

  private updateVitaminC(): void {
    if (!this.isPregnant && !this.isBreastfeeding) {
      return;
    }
    const adh = this.isPregnant ? '85 mg' : '100 mg';
    this.updateVitamin('Vitamine C', adh);
  }

  private updateCholine(): void {
    if (!this.isPregnant) return;
    this.updateVitamin('Choline', '480 mg');
  }

  private updateVitaminA(): void {
    if (!this.isPregnant && !this.isBreastfeeding) {
      return;
    }
    const adh = this.isPregnant ? '750 µg' : '1100 µg';
    this.updateVitamin('Vitamine A', adh);
  }

  private updateVitaminD(): void {
    const adh = this.age >= 70 ? '20 µg' : '10 µg';
    this.updateVitamin('Vitamine D', adh);
  }

  private updateVitaminE(): void {
    // no adjustments needed
  }

  private updateVitaminK(): void {
    // no adjustments needed
  }

  private updateCalcium(): void {
    if (this.sex === 'male') {
      const adh =
        this.age > 24 && this.age < 69
          ? '950 mg'
          : this.age > 69
          ? '1200 mg'
          : '1000 mg';
      this.UpdateMineral('Calcium', adh);
      return;
    }
    const adh =
      this.age > 24 && this.age < 51
        ? '950 mg'
        : this.age > 50 && this.age < 70
        ? '1100 mg'
        : this.age > 69
        ? '1200 mg'
        : this.isBreastfeeding || this.isPregnant
        ? '1000 mg'
        : '1000 mg';

    this.UpdateMineral('Calcium', adh);
    return;
  }

  private updateChloride(): void {
    const adh = this.age >= 70 ? '1,8 g' : this.age >= 50 ? '2,0 g' : '2,3 g';
    this.UpdateMineral('Chloride', adh);
  }

  private updatePhosphorus() {
    const adh = this.isBreastfeeding ? '900 mg' : '550 mg';
    this.UpdateMineral('Fosfor', adh);
  }

  private updateIron() {
    if (this.sex === 'male') return;
    const adh = this.isMenopausal
      ? '11 mg'
      : this.isBreastfeeding
      ? '15 mg'
      : '16 mg';

    this.UpdateMineral('IJzer', adh);
  }

  private updateIdodine() {
    const adh = this.isPregnant || this.isBreastfeeding ? '200 µg' : '150 µg';
    this.UpdateMineral('Jodium', adh);
  }

  private updatePotassium() {
    const adh = this.isBreastfeeding ? '3100 mg' : '3500 mg';
    this.UpdateMineral('Kalium', adh);
  }

  private updateCoppper() {
    const adh = this.isBreastfeeding
      ? '1,3 mg'
      : this.isPregnant
      ? '1,0 mg'
      : '0,9 mg';
    this.UpdateMineral('Koper', adh);
  }

  private updateManganese() {
    // no adjustments needed
  }

  private updateMagnesium() {
    const adh = this.isBreastfeeding ? '280 mg' : '300 mg';
    this.UpdateMineral('Magnesium', adh);
  }

  private updateMolybdeen() {
    // no adjustments needed
  }

  private updateSodium() {
    // no adjustments needed
  }

  private updateSelenium() {
    const adh = this.isBreastfeeding ? '60 µg' : '70 µg';
    this.UpdateMineral('Selenium', adh);
  }

  private updateZinc() {
    if (this.sex === 'male') return;
    const adh = this.isBreastfeeding
      ? '11 mg'
      : this.isPregnant
      ? '9,1 mg'
      : '7 mg';
    this.UpdateMineral('Zink', adh);
  }

  private addSupplementRecommendation(): void {
    this.recommendedSupplements = [];
    if (this.age >= 70) {
      this.recommendedSupplements.push({
        name: 'Vitamine D ',
        amount: '20 µg',
        reason: 'Leeftijd 70+',
      });
    }

    if (this.age >= 50) {
      this.recommendedSupplements.push({
        name: 'Vitamine D',
        amount: '10 µg',
        reason: 'Leeftijd 50+',
      });
    }

    if (this.staysIndoors) {
      this.recommendedSupplements.push({
        name: 'Vitamine D',
        amount: '10 µg',
        reason: 'Weinig blootstelling aan zonlicht',
      });
    }

    if (this.hasDarkSkin) {
      this.recommendedSupplements.push({
        name: 'Vitamine D',
        amount: '10 µg',
        reason: 'Verminderde aanmaak door huidskleur',
      });
    }

    if (this.isVegan) {
      this.recommendedSupplements.push({
        name: 'Vitamine B12',
        amount: 'Aanvulling tot ADH',
        reason: 'Dieet zonder vlees',
      });
    }

    // Pregnancy-related supplement recommendations
    if (this.isPregnant) {
      this.recommendedSupplements.push({
        name: 'Vitamine D',
        amount: '10 µg',
        reason: 'Zwangerschap',
      });
    }

    // Planning pregnancy supplement recommendation
    if (this.isPlanningPregnancy) {
      this.recommendedSupplements.push({
        name: 'Foliumzuur',
        amount: '400 µg ',
        reason: 'Voor en tijdens de eerste tien weken zwangerschap',
      });
    }
  }

  // Start en stop adjusting functies voor de input-group knoppen
  startAdjusting(field: string, change: number, decimals: number): void {
    this.buttonHoldSerivce.startAdjusting(this, field, change, 0, decimals);
  }

  stopAdjusting(): void {
    this.buttonHoldSerivce.stopAdjusting();
  }
}
