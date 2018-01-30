import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { DepartmentsService } from '../../services/departments.service';

@Component({ 
    selector: 'departments-list',
    templateUrl: './list.component.html'
})
export class DepartmentsListComponent {
    public departments: Department[];

    constructor(private departmentsService: DepartmentsService, private alertService: AlertService) {
        this.departmentsService.getDepartments().subscribe(result => {
            this.departments = result
        }, error => {
            this.alertService.error(error.name);
            console.error(error)
        });
    }
}

export interface Department {
    id: number;
    name: string;
    shortName: string;
}
