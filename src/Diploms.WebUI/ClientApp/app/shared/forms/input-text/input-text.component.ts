import { Component, Inject, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'input-text',
    templateUrl: './input-text.component.html'
})
export class TextInputComponent {
    @Input() title: string = "";
    @Input() name: string = "textBox";
    @Input() placeholder: string = "Введите значение";
    @Input() control: AbstractControl = new FormControl("");
}
