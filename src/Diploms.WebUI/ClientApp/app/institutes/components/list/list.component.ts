import { Component, Inject } from '@angular/core';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { InstitutesService } from '../../services/institutes.service';
import { Observable } from "rxjs/Observable";

@Component({ 
    selector: 'institutes-list',
    templateUrl: './list.component.html'
})
export class InstitutesListComponent {
    public institutes: Institute[] = [];
    public isLoading: boolean = true;

    constructor(private institutesService: InstitutesService, private alertService: AlertService) {  }

    getInstitutes = (request:any): Observable<Institute[]> => {
        this.isLoading = true;
        return this.institutesService.getInstitutes().do(_=>this.isLoading=false);
    }   
}

export interface Institute {
    id: number;
    name: string;
    shortName: string;
}
