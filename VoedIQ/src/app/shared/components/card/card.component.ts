import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
})
export class card {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() buttonText: string = 'Start!';
  @Input() linkUrl: string = '';
}
