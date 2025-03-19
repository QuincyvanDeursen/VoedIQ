import { Injectable, Inject } from '@angular/core';

import { Notyf } from 'notyf';
import { NOTYF } from '../utils/notyf.token';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(@Inject(NOTYF) private notyf: Notyf) {}

  success(message: string) {
    this.notyf.open({
      background: '#0a6118',
      position: { x: 'center', y: 'top' },
      message: this.formatMessage(
        'icon-[solar--check-square-bold-duotone]',
        message,
        'size-10'
      ),
    });
  }

  warning(message: string) {
    this.notyf.open({
      background: '#c76700',
      position: { x: 'center', y: 'top' },
      message: this.formatMessage(
        'icon-[solar--shield-warning-bold]',
        message,
        'size-10'
      ),
    });
  }

  error(message: string) {
    this.notyf.open({
      background: '#82091d',
      position: { x: 'center', y: 'top' },
      message: this.formatMessage(
        'icon-[solar--close-circle-bold]',
        message,
        'size-10'
      ),
    });
  }

  info(message: string) {
    this.notyf.open({
      background: '#0e0a61',
      position: { x: 'center', y: 'top' },
      message: this.formatMessage(
        'icon-[solar--info-circle-bold-duotone]',
        message,
        'size-10'
      ),
    });
  }

  private formatMessage(icon: string, message: string, size: string): string {
    return `
      <div class="flex flex-row items-center">
        <div class="w-1/8 mr-3">
          <span class="${size} flex-shrink-0 ${icon} bg-contain"></span> <!-- Gebruikt de juiste icon-klasse -->
        </div>
        <div class="w-7/8">${message}</div> <!-- Tekst vult de rest -->
      </div>
    `;
  }
}
