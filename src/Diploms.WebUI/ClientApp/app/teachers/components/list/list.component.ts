import { Component, Inject } from '@angular/core';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { TeachersService } from '../../services/teachers.service';
import { Observable } from "rxjs/Observable";

@Component({ 
    selector: 'teachers-list',
    templateUrl: './list.component.html'
})
export class TeachersListComponent {
    public teachers: Teacher[] = [];
    public isLoading: boolean = true;

    constructor(private teachersService: TeachersService, private alertService: AlertService) {  }

    getTeachers = (request:any): Observable<Teacher[]> => {
        this.isLoading = true;
        return this.teachersService.getTeachers().do(_=>this.isLoading=false);
    }   
}

export interface Teacher {
    id: number;
    name: string;
    shortName: string;
}
