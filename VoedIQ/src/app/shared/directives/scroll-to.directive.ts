import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
})
export class ScrollToDirective {
  @Input() appScrollTo: string = ''; // De ID van het doel-element om naartoe te scrollen
  @Input() scrollBlock: 'start' | 'center' | 'end' = 'center'; // Dit bepaalt waar het element zich bevindt na het scrollen (start, center, end)

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Wanneer de directive wordt geactiveerd, voeg de scroll logica toe
    this.el.nativeElement.addEventListener('click', () => {
      const targetElement = document.getElementById(this.appScrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Zorgt voor een soepele scroll
          block: this.scrollBlock, // Waar het element op het scherm moet komen (start, center, end)
        });
      }
    });
    // Detecteer veranderingen in de component
    this.cdr.detectChanges();
  }
}
