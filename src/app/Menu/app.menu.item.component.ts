import { Component, Input, Output, EventEmitter, DoCheck, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from './app.menu.model';

@Component({
  selector: 'menu-item',
  template:`
    
  <input type="number" [(ngModel)] = "menuItemValue.price" #price>
  <button class="btn btn-success" (click) = "UpdatePrice(menuItemValue,price)" >Emit</button>
  <br>
  <button class="btn btn-success" (click) = "addThisItem(menuItemValue)" >Add To Cart</button>
 
  
  ` ,
  styles: [`.nameStyle {
                    color: red;
             }

    
    `]
})

//implements OnChanges, OnInit , OnDestroy , DoCheck
export class MenuItemComponent implements OnChanges {

    @Input() menuItemValue: MenuItem;
    @Output() onMenuItemAdd : EventEmitter<MenuItem> = new EventEmitter();
    @Output() onPriceUpdate : EventEmitter<MenuItem> = new EventEmitter();

    addThisItem(itemToBeAdded: MenuItem) {
      this.onMenuItemAdd.emit(itemToBeAdded);
    }

  //   constructor() {
  //     console.log("Constructor");
  // }

    ngOnChanges(changes : SimpleChanges) {
        console.log("ngOnChanges : "  + this.menuItemValue.name)

        this.menuItemValue = Object.assign({} , changes.menuItemValue.currentValue)
   }

  // ngOnInit() {
  //     console.log("ngOnInit : "  + this.menuItemValue.name)
  // }

  // ngDoCheck() {
  //     console.log("ngDoCheck : "  + this.menuItemValue.name)
  // }

  // ngOnDestroy() {
  //     console.log("ngOnDestroy : "  + this.menuItemValue.name)
  // }

  UpdatePrice(item: MenuItem, updatedPrice: number) {
    item.price = updatedPrice;
    this.onPriceUpdate.emit(item);
  }
    
}
