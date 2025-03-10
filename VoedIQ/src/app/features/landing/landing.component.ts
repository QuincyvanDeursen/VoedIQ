import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  name: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.redirectToHomeIfNameExists();
  }

  submitName() {
    if (this.name.trim()) {
      localStorage.setItem('userName', this.name);
      this.redirectToHome();
    }
  }

  private checkIfNameExists() {
    return localStorage.getItem('userName') !== null;
  }

  private redirectToHome() {
    this.router.navigate(['/home']);
  }

  private redirectToHomeIfNameExists() {
    if (this.checkIfNameExists()) {
      this.redirectToHome();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    const key = event.key;

    // Laat alleen letters (A-Z, a-z), spaties, en Backspace door
    if (!/^[a-zA-Z\s]$/.test(key) && key !== 'Backspace') {
      event.preventDefault(); // Voorkom dat andere toetsen worden ingevoerd
    }

    // Als de Enter toets wordt ingedrukt en het invoerveld is niet leeg
    if (key === 'Enter' && this.name) {
      this.submitName(); // Trigger de submitfunctie als Enter wordt ingedrukt
    }
  }
}
