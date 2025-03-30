import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivityInputComponent } from '../activity-input/activity-input.component';
import { CommonModule } from '@angular/common';
import { Activity } from '../../../core/models/activity';
import { ToastService } from '../../services/toast.service';
import { ScrollToDirective } from '../../directives/scroll-to.directive';

@Component({
  selector: 'app-pal-calculator',
  imports: [ActivityInputComponent, CommonModule, ScrollToDirective],
  templateUrl: './pal-calculator.component.html',
  styleUrl: './pal-calculator.component.css',
})
export class PalCalculatorComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  activities: {
    data: {
      activity: Activity | undefined;
      totalMinutes: number;
    };
  }[] = [];

  calculatePalValue: number = 0; // PAL-waarde

  private shouldScroll = false;
  private sectionId: string | null = null;
  copied = false; // Houdt bij of er gekopieerd is

  constructor(
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

  ngOnInit() {
    // Zorgt ervoor dat er ten minste één activiteit is, een lege activiteit
    this.activities.push({ data: { activity: undefined, totalMinutes: 0 } });
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

  scrollToElement(section: string) {
    this.sectionId = section; // Onthoud naar welke sectie we willen scrollen
    this.shouldScroll = true;

    this.cdr.detectChanges(); // Forceer een DOM update
  }

  //////////////////////////////////////////////////////////////////////
  /////////////////////////// Functionaliteit //////////////////////////
  //////////////////////////////////////////////////////////////////////

  calculatePal() {
    if (!this.validateForm()) {
      return;
    }

    // berekent het aantal METs
    const hoursInWeek = 7 * 24;
    let totalMETvalues = 0;

    this.activities.forEach((activity) => {
      if (activity.data.activity === undefined) {
        this.toastService.error('Een activiteit is niet ingevuld');
        return;
      }
      const hours = activity.data.totalMinutes / 60;
      totalMETvalues += activity.data.activity.MET * hours;
    });

    // Totale rusttijd in uren
    const totalRestHours =
      hoursInWeek -
      this.activities.reduce(
        (sum, activity) => sum + activity.data.totalMinutes,
        0
      ) /
        60;

    // Rusttijd heeft een MET van 1, dus we tellen deze uren bij het totale aantal MET-uren
    const totalRestMetHours = totalRestHours * 1;

    // Bereken de PAL-waarde: (actieve MET-uren + rusttijd MET-uren) gedeeld door het aantal uren in de week
    const palValue = (totalMETvalues + totalRestMetHours) / hoursInWeek;
    // rounded to 2 decimals
    const roundedPalValue = Math.round(palValue * 100) / 100;
    this.calculatePalValue = roundedPalValue;
    this.updatePAL(roundedPalValue);
    return roundedPalValue;
  }

  validateForm(): boolean {
    // Valideer of er activiteiten zijn en of ze correct zijn ingevuld
    if (this.activities.length === 0) {
      this.toastService.warning('Voeg ten minste één activiteit toe');
      return false;
    }

    // Controleer of alle activiteiten zijn ingevuld
    const indexOfUndefinedActivity = this.activities.findIndex(
      (activity) => activity.data.activity === undefined
    );
    if (indexOfUndefinedActivity !== -1) {
      this.toastService.warning(
        `Activiteit ${indexOfUndefinedActivity + 1} is niet ingevuld.`
      );
      return false;
    }

    // Controleer of de tijdsduur voor elke activiteit is ingevuld
    const indexOfNoDurationActivity = this.activities.findIndex(
      (activity) => activity.data.totalMinutes === 0
    );
    if (indexOfNoDurationActivity !== -1) {
      this.toastService.warning(
        `Activiteit ${indexOfNoDurationActivity + 1} mist de tijdsduur`
      );
      return false;
    }
    //controleer of de tijdsduur samen niet meer dan 168 uur is
    const totalMinutes = this.activities.reduce(
      (sum, activity) => sum + activity.data.totalMinutes,
      0
    );
    if (totalMinutes > 168 * 60) {
      this.toastService.error(
        'De totale tijdsduur mag niet meer dan 168 uur zijn'
      );
      return false;
    }

    this.toastService.success('PAL-waarde berekend');
    return true;
  }

  private updatePAL(value: number) {
    localStorage.setItem('pal', JSON.stringify(value));

    // Manueel een StorageEvent aanmaken en dispatchen
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'pal',
        newValue: JSON.stringify(value),
      })
    );
  }

  scrollDown() {
    if (this.scrollContainer) {
      const container = this.scrollContainer.nativeElement;
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  }

  //////////////////////////////////////////////////////////////////////
  /////////////////////////// Dynamic form /////////////////////////////
  //////////////////////////////////////////////////////////////////////

  addActivity() {
    this.activities.push({ data: { activity: undefined, totalMinutes: 0 } });
    setTimeout(() => this.scrollDown(), 50); // Wacht even zodat het DOM geüpdatet is
  }

  removeActivity(index: number) {
    // Verwijder een activiteit op basis van de index
    if (this.activities.length === 1) {
      return;
    }
    this.activities.splice(index, 1);
  }

  //////////////////////////////////////////////////////////////////////
  ////////////  Receives data from child component /////////////////////
  //////////////////////////////////////////////////////////////////////

  handleActivityData(
    index: number,
    data: {
      activity: Activity | undefined;
      totalMinutes: number;
    }
  ) {
    console.log(data);
    this.activities[index].data = data;
  }
}
