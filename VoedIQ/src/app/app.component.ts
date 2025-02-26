import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, Event, ActivatedRoute } from '@angular/router';

import { IStaticMethods } from 'flyonui/flyonui';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { filter, map, mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showHeaderFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showHeaderFooter = this.router.url !== '/landing'; // Verberg navbar/footer op de landing pagina
    });
  }
}
