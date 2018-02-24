import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { InstitutesService } from '../../services/institutes.service';
import { OperationResult } from '../../../shared/models/operation-result';
import { Router } from '@angular/router';

@Component({
    selector: 'institutes-add',
    templateUrl: './add.component.html'
})
export class InstitutesAddComponent {
    form: FormGroup;
    errors: string[] | undefined = [];

    constructor(
        private instituteService: InstitutesService,
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
        this.instituteService.addInstitute(form).subscribe(result => this.checkResult(result));
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
        this.router.navigate(['/institutes']);
    }
}
