import { Component, OnInit } from '@angular/core';
import { ActivityBurnCalculatorComponent } from '../activity-burn-calculator/activity-burn-calculator.component';

@Component({
  selector: 'app-sandbox',
  imports: [ActivityBurnCalculatorComponent],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.css',
})
export class SandboxComponent implements OnInit {
  ngOnInit(): void {}
}
