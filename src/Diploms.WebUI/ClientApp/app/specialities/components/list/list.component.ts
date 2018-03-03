import { Component, Inject } from '@angular/core';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { SpecialitiesService } from '../../services/specialities.service';
import { Observable } from "rxjs/Observable";

@Component({ 
    selector: 'specialities-list',
    templateUrl: './list.component.html'
})
export class SpecialitiesListComponent {
    public specialities: Speciality[] = [];
    public isLoading: boolean = true;

    constructor(private specialitiesService: SpecialitiesService, private alertService: AlertService) {  }

    getSpecialities = (request:any): Observable<Speciality[]> => {
        this.isLoading = true;
        return this.specialitiesService.getSpecialities().do(_=>this.isLoading=false);
    }   
}

export interface Speciality {
    id: number;
    name: string;
    shortName: string;
}
