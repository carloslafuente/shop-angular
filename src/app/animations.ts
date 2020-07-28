import {
  trigger,
  transition,
  state,
  animate,
  style,
} from '@angular/animations';

export const openClose = trigger('openClose', [
  state(
    'open',
    style({
      height: '200px',
      opacity: 1,
      backgroundColor: '#252525',
      color: '#FFFFFF',
    })
  ),
  state(
    'closed',
    style({
      height: '100px',
      opacity: 0.8,
      backgroundColor: '#FFFFFF',
      color: '#000000',
    })
  ),
  transition('open => closed', [animate('1s')]),
  transition('closed => open', [animate('0.5s')]),
]);

export const darkLight = trigger('darkLight', [
  state('dark', style({ backgroundColor: '#252525', color: '#FFFFFF' })),
  state('light', style({ backgroundColor: '#FFFFFF', color: '#000000' })),
  transition('light => dark', [animate('1s ease-out')]),
  transition('dark => light', [animate('1s ease-out')]),
]);

export const fadeTop = trigger('fadeTop', [
  state('void', style({ opacity: 0, transform: 'translateY(-50%)' })),
  transition(':enter, :leave', [animate(1000)]),
]);

export const fadeBottom = trigger('fadeBottom', [
  state('void', style({ opacity: 0, transform: 'translateY(50%)' })),
  transition(':enter, :leave', [animate(1000)]),
]);

export const fadeLeft = trigger('fadeLeft', [
  state('void', style({ opacity: 0, transform: 'translateX(-10%)' })),
  transition(':enter, :leave', [animate(500)]),
]);

export const fadeRight = trigger('fadeRight', [
  state(
    'void',
    style({ opacity: 0, background: '#03071e', transform: 'translateX(-10%)' })
  ),
  state(
    '*',
    style({ opacity: 1, background: '#ffba08', transform: 'translateX(0px)' })
  ),
  transition('void <=> *', [animate(500)]),
]);

export const rotate = trigger('rotate', [
  state('default', style({ transform: 'rotate(0)' })),
  state('rotated', style({ transform: 'rotate(-360deg)' })),
  transition('rotated => default', animate('2000ms ease-out')),
  transition('default => rotated', animate('2000ms ease-in')),
]);
