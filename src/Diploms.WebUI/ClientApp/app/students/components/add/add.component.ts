import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { StudentsService } from '../../services/students.service';
import { OperationResult } from '../../../shared/models/operation-result';
import { Router } from '@angular/router';
import { SelectListItem } from '../../../shared/select-list-item';

@Component({
    selector: 'students-add',
    templateUrl: './add.component.html'
})
export class StudentsAddComponent {
    form: FormGroup;
    errors: string[] | undefined = [];
    groupsOptions: SelectListItem[] = [];

    constructor(
        private service: StudentsService,
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService
    ) {
        this.form = this.formBuilder.group({
            "fio": ["", Validators.required],
            "group": ["", Validators.required],
        });
    }

    ngOnInit() {
        this.service.getGroups().subscribe(items => this.groupsOptions = items);
    }

    submit(form: any) {
        this.service.addStudent({
            fio:form.fio, groupId: form.group
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
        this.router.navigate(['/students']);
    }
}
