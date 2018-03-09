import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ok-cancel-buttons',
    template: `
        <button type="button" class="btn btn-primary" [disabled]="okDisabled" (click)="okClick.emit()">{{okTitle}}</button>
        <button type="button" class="btn btn-default" (click)="cancelClick.emit()">{{cancelTitle}}</button>
    `
})
export class OkCancelEditButtonsComponent {
    @Input() okTitle:string = "ОК";
    @Input() cancelTitle:string = "Отмена";
    @Input() okDisabled: boolean = false;

    @Output() okClick = new EventEmitter();
    @Output() cancelClick = new EventEmitter();
}