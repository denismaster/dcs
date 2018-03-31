import { Component, Inject } from '@angular/core';
import { AlertService } from '../../../shared/alert/services/alert.service';
import { GroupsService } from '../../services/groups.service';
import { Observable } from "rxjs/Observable";

@Component({ 
    selector: 'groups-list',
    templateUrl: './list.component.html'
})
export class GroupsListComponent {
    public groups: Group[] = [];
    public isLoading: boolean = true;

    constructor(private groupsService: GroupsService, private alertService: AlertService) {  }

    getGroups = (request:any): Observable<Group[]> => {
        this.isLoading = true;
        return this.groupsService.getGroups().do(_=>this.isLoading=false);
    }   
}

export interface Group {
    id: number;
    name: string;
    shortName: string;
}
