import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ 
    selector: 'departments-list',
    templateUrl: './list.component.html'
})
export class DepartmentsListComponent {
    public departments: Department[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Department[]>(baseUrl + 'api/departments').subscribe(result => {
            this.departments = result
        }, error => console.error(error));
    }
}

interface Department {
    id: number;
    name: string;
    shortName: string;
}
