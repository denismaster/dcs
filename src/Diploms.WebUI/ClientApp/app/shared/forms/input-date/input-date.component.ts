import { Component, Inject, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'input-date',
    templateUrl: './input-date.component.html'
})
export class DateInputComponent {
    @Input() title: string = "";
    @Input() name: string = "dateBox";
    @Input() placeholder: string = "Введите значение";
    @Input() control: AbstractControl = new FormControl("");
}
