import { Component, OnChanges, OnInit,  SimpleChanges, Input, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, ViewChild } from '@angular/core';
import { MenuItem } from './app.menu.model';
import { MenuCartItemComponent } from './app.menu.cart.component';

@Component({
  selector: 'menu-root',
  templateUrl: './app.menu.component.html',
  styleUrls: ['./app.menu.component.css']
})


export class MenuComponent {

    menuItems: MenuItem[] = [{
        name:'PBS',
        description:'PBS',
        price:9.99
    },{
        name:'CBS',
        description:'CBS',
        price:15.99
    },{
        name:'Biryani',
        description:'Biryani',
        price:19.99
    }]
  
    actionName:string = "Success"
    dishAddedToCardCount: number = 0;
    changesTest: number = 5;
    showNewMenuItemPanel:boolean = false;
    currentDate:Date = new Date();
    invalidCopoun: boolean = false;    
    totalPrice: number = 0;

    showOrHideTheNewMenuItemPanel() {
        this.showNewMenuItemPanel = !this.showNewMenuItemPanel;
    }

    @ViewChild(MenuCartItemComponent)  private cartComponent : MenuCartItemComponent;
   //

    onAddingAnItem(item: MenuItem) {
        this.dishAddedToCardCount ++ ;
        this.totalPrice = this.totalPrice + item.price;
    }

    addnewMenuItem(name:string,description:string,price:number) {
        let newMenuItem = {
            name,
            description,
            price
        }
        this.menuItems.push(newMenuItem);
    }

    UpdatePrice(itemToUpdate: MenuItem) {
        let newMenuItems:MenuItem[] = [];
        this.menuItems.forEach((item) => {
            if(item.name === itemToUpdate.name) {
                newMenuItems.push(itemToUpdate)
            } else {
                newMenuItems.push(item)
            }
        })
    }
      //update(value: string) { this.value = value; }

      applyCoupon(discount: string) {
        console.log(discount);
        if(discount === 'D50') {
            this.totalPrice = this.cartComponent.applyCoupon(50);
        } else if(discount == 'D30') {
            this.totalPrice = this.cartComponent.applyCoupon(30);
        } else {
          this.totalPrice = this.totalPrice
          this.invalidCopoun = true;
        }
      }
      


}
