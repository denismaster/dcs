import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'departments-add',
    templateUrl: './add.component.html'
})
export class DepartmentsAddComponent {
    form: FormGroup;
    
    constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient) {
        this.form = this.formBuilder.group({
            "name": ["", Validators.required],
            "shortName": [""]
        });
    }

    submit(form:any) {
        this.httpClient.put("/api/departments/add", form).subscribe(e=>{});
    }
}
