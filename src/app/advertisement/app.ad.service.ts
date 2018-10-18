import { Injectable }           from '@angular/core';
import { AdvertisementComponent } from './app.advertisement.component';


@Injectable()
export class AdService {
  getAds() {
    return [
     {
        name:'Shirt',
        addImage:'https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1213%2F4300%2Fproducts%2FDSC6561_1024x1024.jpg%3Fv%3D1466705439&imgrefurl=https%3A%2F%2Fthe-tripadvisor-store.myshopify.com%2Fproducts%2Freviewer-t-shirt&docid=mcIZZzA9ZzrWoM&tbnid=vNrRhijC0pCWDM%3A&vet=10ahUKEwjkmbax4ZDeAhUPna0KHarfDb0QMwj0ASgMMAw..i&w=1024&h=1024&bih=948&biw=1680&q=shirt&ved=0ahUKEwjkmbax4ZDeAhUPna0KHarfDb0QMwj0ASgMMAw&iact=mrc&uact=8',
        price: 9.99
     },
     {
        name:'Pant',
        addImage:'https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1213%2F4300%2Fproducts%2FDSC6561_1024x1024.jpg%3Fv%3D1466705439&imgrefurl=https%3A%2F%2Fthe-tripadvisor-store.myshopify.com%2Fproducts%2Freviewer-t-shirt&docid=mcIZZzA9ZzrWoM&tbnid=vNrRhijC0pCWDM%3A&vet=10ahUKEwjkmbax4ZDeAhUPna0KHarfDb0QMwj0ASgMMAw..i&w=1024&h=1024&bih=948&biw=1680&q=shirt&ved=0ahUKEwjkmbax4ZDeAhUPna0KHarfDb0QMwj0ASgMMAw&iact=mrc&uact=8',
        price: 19.99
     }
    ];
  }
}