import { Component, Inject, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'input-area',
    templateUrl: './input-area.component.html'
})
export class TextAreaComponent {
    @Input() title: string = "";
    @Input() name: string = "textArea";
    @Input() placeholder: string = "Введите значение";
    @Input() control: AbstractControl = new FormControl("");
}
