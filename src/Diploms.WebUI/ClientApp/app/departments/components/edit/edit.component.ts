import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'departments-edit',
    templateUrl: './edit.component.html'
})
export class DepartmentsEditComponent {
    form: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            "name": ["", Validators.required],
            "institute": ["", Validators.required]
        });
    }
}
