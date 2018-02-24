import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { DepartmentsService } from '../../services/departments.service';
import { OperationResult } from '../../../shared/models/operation-result';
import { Router } from '@angular/router';
import { SelectListItem } from '../../../shared/select-list-item';

@Component({
    selector: 'departments-add',
    templateUrl: './add.component.html'
})
export class DepartmentsAddComponent {
    form: FormGroup;
    errors: string[] | undefined = [];
    institutesOptions: SelectListItem[] = [];

    constructor(
        private service: DepartmentsService,
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService
    ) {
        this.form = this.formBuilder.group({
            "name": ["", Validators.required],
            "shortName": [""],
            "institute": ["", Validators.required]
        });
    }

    ngOnInit() {
        this.service.getInstitutes().subscribe(items => this.institutesOptions = items);
    }

    submit(form: any) {
        this.service.addDepartment({
            name: form.name, shortName: form.shortName, instituteId: form.institute
        }).subscribe(result => this.checkResult(result));
    }

    checkResult(result: OperationResult) {
        if (result.hasErrors) {
            this.errors = result.errors;
        } else {
            this.alertService.info("Запись успешно добавлена", true);
            this.goBack();
        }
    }

    goBack() {
        this.router.navigate(['/departments']);
    }
}
