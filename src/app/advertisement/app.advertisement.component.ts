import { Component, ViewChild, ViewContainerRef , ComponentFactoryResolver, ComponentRef} from '@angular/core';
import { Advertisement } from './app.advertisement.model';
import { AdService } from './app.ad.service';
import { AdvertisementChildComponent } from './app.add.dynamic.component';
@Component({
    selector:'add-banner-comp',
  template:`
    <div class="ad-banner">
        <h3>Advertisements</h3>
        <div #dynamicAdvertisement></div>
    </div>
  
  `
})


export class AdvertisementComponent {

    ads: Advertisement[] = [];
    interval: any;
    constructor(private adService: AdService, 
        private componentFactoryResolver: ComponentFactoryResolver) {

    }

    @ViewChild(AdvertisementChildComponent) adComponent: AdvertisementChildComponent ;
    @ViewChild('dynamicAdvertisement',{read:ViewContainerRef}) adComponentContainerReference : ViewContainerRef;
    

    ngOnInit() {
        this.ads = this.adService.getAds();
        this.getAds();
    }


    loadAdvertisement() {
        var randomNumber = Math.floor(Math.random() * this.ads.length );
        let currentAd:Advertisement = this.ads[randomNumber];

        let adComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AdvertisementChildComponent);
        let adContainerRef = this.adComponentContainerReference.createComponent(adComponentFactory);
        const adContainerRefInstance = adContainerRef.instance;
        adContainerRefInstance.ad = currentAd;
       
    
    }

    getAds() {
        this.interval = setInterval(() => {
            this.adComponentContainerReference.clear();
          this.loadAdvertisement();
        }, 3000);
      }
    
  
    
}
