import { Component, OnChanges, OnInit,  SimpleChanges, Input, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from './app.menu.model';
import { MenuCartItemComponent } from './app.menu.cart.component';
import { MenuService } from './app.menu.service';

@Component({
  selector: 'menu-root',
  templateUrl: './app.menu.component.html',
  styleUrls: ['./app.menu.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})


export class MenuComponent implements OnInit{

  
    actionName:string = "Success"
    dishAddedToCardCount: number = 0;
    changesTest: number = 5;
    showNewMenuItemPanel:boolean = false;
    currentDate:Date = new Date();
    invalidCopoun: boolean = false;    
    totalPrice: number = 0;
    menuSearchText: string = '';
    
    menuItems: MenuItem[] = [];
    constructor(private menuService: MenuService) {

    }
    ngOnInit() {
         this.menuService.getMenuItems().subscribe((menus: MenuItem[]) => {
            this.menuItems = menus;
         })
    }
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
        this.invalidCopoun = false;
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
