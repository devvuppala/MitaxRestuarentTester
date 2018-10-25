import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
    selector:'[ngNotIf]',
})

export class NgNotIfDirective {

    constructor(private viewContainerRef : ViewContainerRef, private viewTemplate: TemplateRef<any>) {

    }

    @Input()
    set ngNotIf(value: boolean) {
        console.log(this.viewContainerRef);
        console.log(this.viewTemplate);
        if(!value) {
            this.viewContainerRef.createEmbeddedView(this.viewTemplate);
        } else {
            this.viewContainerRef.clear();
        }
    }
}