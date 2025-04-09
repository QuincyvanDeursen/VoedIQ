import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private showHeaderFooterSubject = new BehaviorSubject<boolean>(true); // Standaard zichtbaar
  showHeaderFooter$ = this.showHeaderFooterSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderFooterVisibility(event.urlAfterRedirects);
      }
    });
  }

  // Controleer of de header en footer zichtbaar moeten zijn op basis van de URL
  private updateHeaderFooterVisibility(url: string) {
    // Controleer of de URL overeenkomt met specifieke routes
    if (this.isLandingPage(url) || this.isNoHeaderFooterPage(url)) {
      this.showHeaderFooterSubject.next(false); // Verberg de header en footer
    } else {
      this.showHeaderFooterSubject.next(true); // Toon de header en footer
    }
  }

  // Controleer of de URL overeenkomt met de landingpage
  private isLandingPage(url: string): boolean {
    return url === '/landing'; // Bijvoorbeeld: de landingpage route
  }

  // Voeg hier meer specifieke routes toe die geen header/footer moeten tonen
  private isNoHeaderFooterPage(url: string): boolean {
    // Controleer of de URL een cursuspagina bevat (dynamisch) en geen header/footer moet tonen
    const courseName = this.getCourseNameFromUrl(url);
    return courseName === 'basiskennis' || courseName === 'gezondevoeding';
  }

  // Haal de courseName uit de URL
  private getCourseNameFromUrl(url: string): string | null {
    const courseNameMatch = url.match(/\/cursus\/([^\/]+)/); // Haalt het gedeelte na /cursus/
    return courseNameMatch ? courseNameMatch[1] : null;
  }
}
