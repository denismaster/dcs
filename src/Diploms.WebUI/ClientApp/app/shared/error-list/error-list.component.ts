import { Component, Input } from '@angular/core';

@Component({
    selector: 'error-list',
    template: `
    <ul *ngIf="errors">
        <li *ngFor="let error of errors" class="text-danger">{{error}}</li>
    </ul>
    `
})
export class ErrorListComponent {
    @Input() errors:string[]=[];
}