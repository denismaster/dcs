import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() title:string;
    @Input() showBody: boolean = true;
    @Input() showFooter: boolean = true;
}
