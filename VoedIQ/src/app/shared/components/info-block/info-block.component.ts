import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-block',
  imports: [CommonModule],
  templateUrl: './info-block.component.html',
  styleUrl: './info-block.component.css',
})
export class InfoBlockComponent {
  @Input() type: 'tip' | 'fact' | 'story' = 'tip';
  @Input() content: string = '';

  get iconClass(): string {
    switch (this.type) {
      case 'fact':
        return 'icon-[solar--notebook-bookmark-bold]';
      case 'story':
        return 'icon-[solar--chat-round-line-bold]';
      default:
        return 'icon-[solar--lightbulb-minimalistic-bold]';
    }
  }

  get bgClass(): string {
    switch (this.type) {
      case 'fact':
        return 'bg-green-100';
      case 'story':
        return 'bg-yellow-100';
      default:
        return 'bg-blue-100';
    }
  }

  get iconBgClass() {
    switch (this.type) {
      case 'tip':
        return 'bg-blue-600';
      case 'fact':
        return 'bg-green-600';
      case 'story':
        return 'bg-yellow-400';
      default:
        return '';
    }
  }
}
