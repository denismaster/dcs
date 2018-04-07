import { Component, Inject } from '@angular/core';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { StudentsService } from '../../services/students.service';
import { Observable } from "rxjs/Observable";

@Component({ 
    selector: 'students-list',
    templateUrl: './list.component.html'
})
export class StudentsListComponent {
    public students: Student[] = [];
    public isLoading: boolean = true;

    constructor(private studentsService: StudentsService, private alertService: AlertService) {  }

    getStudents = (request:any): Observable<Student[]> => {
        this.isLoading = true;
        return this.studentsService.getStudents().do(_=>this.isLoading=false);
    }   
}

export interface Student {
    id: number;
    name: string;
    shortName: string;
}
