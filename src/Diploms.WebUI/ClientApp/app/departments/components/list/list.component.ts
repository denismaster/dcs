import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../shared/alert/services/alert.service';

@Component({ 
    selector: 'departments-list',
    templateUrl: './list.component.html'
})
export class DepartmentsListComponent {
    public departments: Department[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private alertService: AlertService) {
        http.get<Department[]>(baseUrl + 'api/departments').subscribe(result => {
            this.departments = result
        }, error => {
            this.alertService.error(error.name);
            console.error(error)
        });
    }
}

interface Department {
    id: number;
    name: string;
    shortName: string;
}
