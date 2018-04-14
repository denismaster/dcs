import { Component, Inject } from '@angular/core';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { DiplomsService } from '../../services/diploms.service';
import { Observable } from "rxjs/Observable";

@Component({ 
    selector: 'diploms-list',
    templateUrl: './list.component.html'
})
export class DiplomsListComponent {
    public diploms: Diplom[] = [];
    public isLoading: boolean = true;

    constructor(private diplomsService: DiplomsService, private alertService: AlertService) {  }

    getDiploms = (request:any): Observable<Diplom[]> => {
        this.isLoading = true;
        return this.diplomsService.getDiploms().do(_=>this.isLoading=false);
    }   
}

export interface Diplom {
    id: number;
    name: string;
    shortName: string;
}
