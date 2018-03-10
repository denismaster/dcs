import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthStore } from '../services/auth.store';

@Directive({
    selector: '[ifAuth]',
})
export class IfAuthDirective {
    subscription: Subscription | undefined = undefined;
    @Input('ifAuth') show: boolean = false;

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef, private auth: AuthStore) {
    }

    ngOnInit() {
        this.subscription = this.auth.authStateChanges$.subscribe(isLoggedIn => {
            if (isLoggedIn) {
                if (this.show) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }
            } else {
                if (this.show) {
                    this.viewContainer.clear();
                } else {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                }
            }
        });
    }
}
