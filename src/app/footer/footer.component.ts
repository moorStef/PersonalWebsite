import { Component, OnInit, Input } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';

const footerAnimation = trigger('footerAnim', [
  transition(':enter', [
    style({opacity: 0}),
    animate('1000ms {{delay}}ms'),
  ], { params: { delay: 0 } }),

  transition(':leave', [
    animate('1000ms {{delay}}ms', style({opacity: 0}))
  ], { params: { delay: 0 } }),
]);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [footerAnimation]
})
export class FooterComponent implements OnInit {

  @Input() delay = 0;

  constructor() { }

  ngOnInit() {
  }
}
