import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentsService } from '../../services/departments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'departments-edit',
    templateUrl: './edit.component.html'
})
export class DepartmentsEditComponent implements OnInit {
    form: FormGroup;
    id: number;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private service: DepartmentsService
    ) {
        this.id = activatedRoute.snapshot.params['id'];
        if (!this.id) {
            router.navigateByUrl("['/404']");
        }
        this.form = this.formBuilder.group({
            "id": [this.id, Validators.required],
            "name": ["", Validators.required],
            "shortName": [""]
        });
    }

    ngOnInit() {
        this.service.getDepartment(this.id).subscribe(result => {
            this.form.setValue(result);
        })
    }


    
}
