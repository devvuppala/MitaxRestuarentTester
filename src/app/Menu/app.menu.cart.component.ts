import { Component, Input, Output, EventEmitter, DoCheck, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from './app.menu.model';

@Component({
  selector: 'menu-cart',
  template:`

    Cart : {{cartValue}}
  
  `
})

//implements OnChanges, OnInit , OnDestroy , DoCheck
export class MenuCartItemComponent implements OnChanges  {

    @Input() cartValue: number;

  //   constructor() {
  //     console.log("Constructor");
  // }

   ngOnChanges(changes : SimpleChanges) {
       console.log("MenuCartItemComponent ngOnChanges Cart Updated: " + this.cartValue);
  }

  ngOnInit() {
       console.log("MenuCartItemComponent ngOnInit")
   }

  ngDoCheck() {
      console.log(" MenuCartItemComponent ngDoCheck : "  + this.cartValue)
   }

  ngOnDestroy() {
       console.log("MenuCartItemComponent ngOnDestroy : ")
   }
    
}
