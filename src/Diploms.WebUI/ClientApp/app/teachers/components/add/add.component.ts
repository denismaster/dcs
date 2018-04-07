import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { TeachersService } from '../../services/teachers.service';
import { OperationResult } from '../../../shared/models/operation-result';
import { Router } from '@angular/router';
import { SelectListItem } from '../../../shared/select-list-item';

@Component({
    selector: 'teachers-add',
    templateUrl: './add.component.html'
})
export class TeachersAddComponent {
    form: FormGroup;
    errors: string[] | undefined = [];
    departmentsOptions: SelectListItem[] = [];
    positionsOptions: SelectListItem[] = [];

    constructor(
        private service: TeachersService,
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService
    ) {
        this.form = this.formBuilder.group({
            "fio": ["", Validators.required],
            "department": ["", Validators.required],
            "position": ["", Validators.required],
            "maxWorkCount": ["", Validators.required],
        });
    }

    ngOnInit() {
        this.service.getDepartments().subscribe(items => this.departmentsOptions = items);
        this.service.getPositions().subscribe(items => this.positionsOptions = items);
    }

    submit(form: any) {
        this.service.addTeacher({
            fio:form.fio, departmentId: form.department, positionId: form.position, maxWorkCount:form.maxWorkCount
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
        this.router.navigate(['/teachers']);
    }
}
