import { Component, OnInit } from '@angular/core';
import { PalCalculatorComponent } from '../../shared/components/pal-calculator/pal-calculator.component';

@Component({
  selector: 'app-sandbox',
  imports: [PalCalculatorComponent],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.css',
})
export class SandboxComponent implements OnInit {
  ngOnInit(): void {}
}
