import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './card.component.html',
})
export class card {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() buttonText: string = 'Start!';
}
