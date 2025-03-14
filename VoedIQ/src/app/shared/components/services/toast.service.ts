import { Injectable, Inject } from '@angular/core';

import { Notyf } from 'notyf';
import { NOTYF } from '../../utils/notyf.token';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(@Inject(NOTYF) private notyf: Notyf) {}

  success(message: string) {
    this.notyf.open({
      type: 'success',
      message: this.formatMessage(
        'solar--check-square-bold-duotone',
        message,
        10
      ),
    });
  }

  warning(message: string) {
    this.notyf.open({
      type: 'warning',
      message: this.formatMessage('solar--shield-warning-bold', message, 10),
    });
  }

  error(message: string) {
    this.notyf.open({
      type: 'error',
      message: this.formatMessage('solar--close-circle-bold', message, 10),
    });
  }

  info(message: string) {
    this.notyf.open({
      type: 'info',
      message: this.formatMessage('solar--info-circle-bold', message, 10),
      background: '#1a69e8',
    });
  }

  private formatMessage(icon: string, message: string, size: number): string {
    return `
    <div class="flex flex-row  items-center"> <!-- Vaste breedte -->
      <div class="w-1/8 mr-3"> <!-- Icon neemt altijd 1/6e in -->
        <span class="size-${size} flex-shrink-0 icon-[${icon}]"></span>
      </div>
      <div class="w-7/8">${message}</div> <!-- Tekst vult de rest -->
    </div>
  `;
  }
}
