import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { card } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, card],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userName: string = '';
  greeting: string = this.setGreeting();

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || '';
  }

  private setGreeting(): string {
    const hour = new Date().getHours();
    return ['Goedenacht', 'Goedemorgen', 'Goedemiddag', 'Goedenavond'][
      hour < 5 ? 0 : hour < 12 ? 1 : hour < 18 ? 2 : 3
    ];
  }

  scrollToElement(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Zorgt voor een soepele scroll
      });
    }
  }
}
