import { trigger, transition, style, animate } from '@angular/animations';

export const cardAnimation = trigger('cardAnimation', [
    transition('void => enter', [
        style({ transform: 'translateX(0px)', opacity: 1 }),
        animate('0.5s ease', style({ transform: 'translateX(-50px)', opacity: 0 }))
    ]),
    transition('void => leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('0.5s ease', style({ transform: 'translateX(50px)', opacity: 0 }))
    ])
]);