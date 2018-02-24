import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { SelectListItem } from '../../select-list-item';

@Component({
    selector: 'input-select',
    templateUrl: './input-select.component.html'
})
export class InputSelectComponent {
    @Input() name: string = "";
    @Input() title: string = "";
    @Input() placeholder: string = "Выберите элемент";
    @Input() control: AbstractControl = new FormControl("");

    @Input() options: SelectListItem[] = [];
}