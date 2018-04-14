import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { DiplomsService } from '../../services/diploms.service';
import { OperationResult } from '../../../shared/models/operation-result';
import { Router } from '@angular/router';
import { SelectListItem } from '../../../shared/select-list-item';

@Component({
    selector: 'diploms-add',
    templateUrl: './add.component.html'
})
export class DiplomsAddComponent {
    form: FormGroup;
    errors: string[] | undefined = [];
    teachersOptions: SelectListItem[] = [];
    studentsOptions: SelectListItem[] = [];
    
    constructor(
        private service: DiplomsService,
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService
    ) {
        this.form = this.formBuilder.group({
            "name": ["", Validators.required],
            "description": [""],
            "teacherId": ["", Validators.required],
            "studentId": ["", Validators.required],
        });
    }

    ngOnInit() {
        this.service.getTeachers().subscribe(items => this.teachersOptions = items);
        this.service.getStudents().subscribe(items => this.studentsOptions = items);
    }

    submit(form: any) {
        this.service.addDiplom(form).subscribe(result => this.checkResult(result));
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
        this.router.navigate(['/diploms']);
    }
}
