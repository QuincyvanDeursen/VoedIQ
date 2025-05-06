import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { card } from '../../shared/components/card/card.component';
import { ScrollToDirective } from '../../shared/directives/scroll-to.directive';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FactService } from '../../core/services/fact.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, card, ScrollToDirective, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  facts: string[] = [];

  ngOnInit() {
    this.loadFacts();
  }
  constructor(private factService: FactService) {}

  private loadFacts(): void {
    this.facts = this.factService.getFacts();
  }
}
