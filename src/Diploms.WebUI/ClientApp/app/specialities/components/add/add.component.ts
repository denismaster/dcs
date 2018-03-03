import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { SpecialitiesService } from '../../services/specialities.service';
import { OperationResult } from '../../../shared/models/operation-result';
import { Router } from '@angular/router';
import { SelectListItem } from '../../../shared/select-list-item';

@Component({
    selector: 'specialities-add',
    templateUrl: './add.component.html'
})
export class SpecialitiesAddComponent {
    form: FormGroup;
    errors: string[] | undefined = [];
    departmentsOptions: SelectListItem[] = [];

    constructor(
        private service: SpecialitiesService,
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService
    ) {
        this.form = this.formBuilder.group({
            "name": ["", Validators.required],
            "shortName": [""],
            "code": [""],
            "department": ["", Validators.required]
        });
    }

    ngOnInit() {
        this.service.getInstitutes().subscribe(items => this.departmentsOptions = items);
    }

    submit(form: any) {
        this.service.addSpeciality({
            name: form.name, shortName: form.shortName, departmentId: form.department
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
        this.router.navigate(['/specialities']);
    }
}
