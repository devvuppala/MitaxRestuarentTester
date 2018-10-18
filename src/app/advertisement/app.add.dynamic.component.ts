import { Component, Input } from '@angular/core';
import { Advertisement } from './app.advertisement.model';

@Component({
  template:`
    
    Name : {{ad.name}}
    image : {{ad.image}}
    price : {{ad.price}}
  
  `
})


export class AdvertisementChildComponent {

    @Input() ad: Advertisement;
    
  
    
}
