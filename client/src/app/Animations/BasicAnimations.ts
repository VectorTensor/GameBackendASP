import {animate, style, transition, trigger} from "@angular/animations";

export const routeAnimation = trigger('fade',[
  transition(':enter',[
    style({
      opacity: '0'
    }),
    animate('2000ms ease-in',style({
      opacity:'1'

    }))



  ]),

])
