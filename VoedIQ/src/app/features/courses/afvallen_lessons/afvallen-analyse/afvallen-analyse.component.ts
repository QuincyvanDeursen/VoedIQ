import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../shared/components/info-block/info-block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-afvallen-analyse',
  imports: [InfoBlockComponent, CommonModule],
  templateUrl: './afvallen-analyse.component.html',
  styleUrl: './afvallen-analyse.component.css',
})
export class AfvallenAnalyseComponent {
  antwoord: boolean | null = null;
}
