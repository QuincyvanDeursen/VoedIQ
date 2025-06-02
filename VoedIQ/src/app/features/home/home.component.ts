import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ScrollToDirective } from '../../shared/directives/scroll-to.directive';
import { FormsModule } from '@angular/forms';
import { FactService } from '../../core/services/fact.service';
import { RouterLink } from '@angular/router';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    ScrollToDirective,
    FormsModule,
    RouterLink,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  facts: string[] = [];

  ngOnInit() {
    this.loadFacts();
  }
  constructor(
    private factService: FactService,
    private toastService: ToastService
  ) {}

  private loadFacts(): void {
    this.facts = this.factService.getFacts();
  }

  noContentAlert() {
    this.toastService.warning(
      'Deze cursus is nog in ontwikkeling! Wordt verwacht voor juni 2025.'
    );
  }
}
