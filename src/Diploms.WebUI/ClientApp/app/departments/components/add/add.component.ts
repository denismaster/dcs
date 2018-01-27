import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'departments-add',
    templateUrl: './add.component.html'
})
export class DepartmentsAddComponent {
    form: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            "name": ["", Validators.required],
            "shortName": [""]
        });
    }
}
