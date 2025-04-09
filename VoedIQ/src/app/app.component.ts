import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { CommonModule } from '@angular/common';

import { IStaticMethods } from 'flyonui/flyonui';
import { Observable } from 'rxjs';
import { LayoutService } from './core/services/layout.service';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showHeaderFooter$!: Observable<boolean>;

  constructor(private router: Router, private layoutService: LayoutService) {}

  ngOnInit() {
    this.showHeaderFooter$ = this.layoutService.showHeaderFooter$;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}
