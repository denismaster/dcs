import { Component, Inject } from '@angular/core';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { DepartmentsService } from '../../services/departments.service';
import { Observable } from "rxjs/Observable";

@Component({ 
    selector: 'departments-list',
    templateUrl: './list.component.html'
})
export class DepartmentsListComponent {
    public departments: Department[] = [];
    public isLoading: boolean = true;

    constructor(private departmentsService: DepartmentsService, private alertService: AlertService) {  }

    getDepartments = (request:any): Observable<Department[]> => {
        this.isLoading = true;
        return this.departmentsService.getDepartments().do(_=>this.isLoading=false);
    }   
}

export interface Department {
    id: number;
    name: string;
    shortName: string;
}
