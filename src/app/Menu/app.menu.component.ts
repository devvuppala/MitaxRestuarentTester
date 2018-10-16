import { Component, OnChanges, OnInit,  SimpleChanges, Input, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { MenuItem } from './app.menu.model';

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

    showOrHideTheNewMenuItemPanel() {
        this.showNewMenuItemPanel = !this.showNewMenuItemPanel;
    }
   //

    onAddingAnItem(item: MenuItem) {
        this.dishAddedToCardCount ++ ;
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
}
