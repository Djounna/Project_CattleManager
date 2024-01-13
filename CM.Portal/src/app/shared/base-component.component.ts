import { Component, OnDestroy } from "@angular/core";
import { Store } from "@ngxs/store";
import { Subject } from "rxjs";

@Component({
    selector: 'app-base',
    template: `<div> base works!!  </div>`
})
export class BaseComponent implements OnDestroy {

    constructor(protected store: Store){}

    protected $Destroyed : Subject<void> = new Subject<void>();
    protected displayLoader : boolean = false;

    ngOnDestroy(): void {
        this.$Destroyed.next();
        this.$Destroyed.complete();
    }
}