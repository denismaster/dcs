import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { GroupsService } from '../../services/groups.service';
import { OperationResult } from '../../../shared/models/operation-result';
import { Router } from '@angular/router';
import { SelectListItem } from '../../../shared/select-list-item';

@Component({
    selector: 'groups-add',
    templateUrl: './add.component.html'
})
export class GroupsAddComponent {
    form: FormGroup;
    errors: string[] | undefined = [];
    departmentsOptions: SelectListItem[] = [];

    constructor(
        private service: GroupsService,
        private router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService
    ) {
        this.form = this.formBuilder.group({
            "name": ["", Validators.required],
            "shortName": [""],
            "department": ["", Validators.required]
        });
    }

    ngOnInit() {
        this.service.getDepartments().subscribe(items => this.departmentsOptions = items);
    }

    submit(form: any) {
        this.service.addGroup({
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
        this.router.navigate(['/groups']);
    }
}
