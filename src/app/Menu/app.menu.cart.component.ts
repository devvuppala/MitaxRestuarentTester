import { Component, Input, Output, EventEmitter, DoCheck, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from './app.menu.model';

@Component({
  selector: 'menu-cart',
  template:`
   <div class="float-right">
    <button class="btn btn-primary float-right" >Cart ({{cartValue}})</button><br>
    <div *ngIf = "updatedPrice" class="alert alert-success" role="alert">
      Price Updated to : {{totalPrice}}
    </div>
  
  </div>
  
  `
})

//implements OnChanges, OnInit , OnDestroy , DoCheck
export class MenuCartItemComponent implements OnChanges  {

    @Input() cartValue: number;
    @Input() totalPrice: number = 0.00;
    updatedPrice:boolean = false;

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

   showUpdatedPrice() {
      this.updatedPrice = true;
   }
    
   applyCoupon(discount: number) {
      console.log("Cart" + discount);
      this.totalPrice = this.totalPrice * (discount /100);
      return this.totalPrice;
   }

   
}
