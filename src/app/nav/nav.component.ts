import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppModule } from '../app.module';
import {transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(':enter', [style({opacity: 0})], {optional: true}),
        query(':leave', [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))], { optional: true }),
        query(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))], { optional: true })
      ])
    ])
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
