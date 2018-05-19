import { Component, Inject, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'input-checkbox',
    templateUrl: './input-checkbox.component.html'
})
export class CheckboxInputComponent {
    @Input() title: string = "";
    @Input() name: string = "checkBox";
    @Input() control: AbstractControl = new FormControl("");
}
