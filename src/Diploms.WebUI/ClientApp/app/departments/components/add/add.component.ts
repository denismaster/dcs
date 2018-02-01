import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { DepartmentsService } from '../../services/departments.service';
import { OperationResult } from '../../../shared/models/operation-result';
import { Router } from '@angular/router';

@Component({
    selector: 'departments-add',
    templateUrl: './add.component.html'
})
export class DepartmentsAddComponent {
    form: FormGroup;
    errors: string[] | undefined = [];

    constructor(
        private departmentService: DepartmentsService,
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService
    ) {
        this.form = this.formBuilder.group({
            "name": ["", Validators.required],
            "shortName": [""]
        });
    }

    submit(form: any) {
        this.departmentService.addDepartment(form).subscribe(result => this.checkResult(result));
    }

    checkResult(result: OperationResult) {
        if (result.hasErrors) {
            this.errors = result.errors;
        } else {
            this.alertService.success("Запись успешно добавлена", true);
            this.goBack();
        }
    }

    goBack() {
        this.router.navigate(['/departments']);
    }
}
