import { InjectionToken } from '@angular/core';
import { Notyf } from 'notyf';

export const NOTYF = new InjectionToken<Notyf>('NotyfToken');

export function notyfFactory(): Notyf {
  return new Notyf({
    duration: 5000, // Set your global Notyf configuration here
    position: {
      x: 'center',
      y: 'bottom',
    },
    ripple: true,
    dismissible: true,
    types: [
      {
        type: 'warning',
        background: 'orange',
      },
      {
        type: 'error',
        background: 'indianred',
        duration: 2000,
        dismissible: true,
      },
    ],
  });
}
