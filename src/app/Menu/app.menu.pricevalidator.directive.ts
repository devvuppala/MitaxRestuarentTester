import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, HostBinding, HostListener, Input } from "@angular/core";

@Directive({

    selector:'[price-directive]'
})


export class priceDirective implements OnInit, OnDestroy {

    @HostBinding('style.border') borderColor;
    @HostBinding("title") title;

    @Input() validationFailedColor: string = '5px solid red';
    @Input() validationPassedColor: string = '5px solid green';
    constructor(private elementRef: ElementRef , private renderer: Renderer2) {

    }


    ngOnInit() {
        this.borderColor = '1px solid blue';
        this.renderer.setStyle(this.elementRef.nativeElement,'font-size','19px');
        this.renderer.setStyle(this.elementRef.nativeElement,'color','blue');
    }

    ngOnDestroy() {

    }

    @HostListener('input') validatInput() {
        let value = this.elementRef.nativeElement.value;
        let str: Object = 'wqewqewqewq'
        let loopValue: object[] =  [str];
       loopValue.forEach((str) => console.log(str))

       for(let str of loopValue) {
           console.log(str);
       }
        console.log(value);
        if(value <= 5) {
            this.borderColor = this.validationFailedColor;
            this.title = "Value should be greater than 5"
        } else {
            this.borderColor = this.validationPassedColor;
            this.title = "Valid!!!"
        }
        this.elementRef.nativeElement.value = value;
    }
}