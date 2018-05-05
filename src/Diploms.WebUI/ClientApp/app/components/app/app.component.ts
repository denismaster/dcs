import { Component } from '@angular/core';
import { WideStore } from '../../shared/screen/wide.store';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isWide: boolean = false;
    constructor(private wide: WideStore) {
        wide.stateChanges$.subscribe(isWide => this.isWide = isWide)
    }
}
