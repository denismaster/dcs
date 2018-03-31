import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Group } from "../components/list/list.component";
import { OperationResult } from "../../shared/models/operation-result";
import { SelectListItem } from "../../shared/select-list-item";

@Injectable()
export class GroupsService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public getGroups(): Observable<Group[]> {
        return this.http.get<Group[]>(this.baseUrl + 'api/groups');
    }

    public getDepartments(): Observable<SelectListItem[]> {
        return this.http.get<SelectListItem[]>(this.baseUrl + 'api/departments/select-list');
    }

    public getGroup(id: number | string): Observable<Group> {
        return this.http.get<Group>(this.baseUrl + 'api/groups/' + id);
    }

    public addGroup(model: any): Observable<OperationResult> {
        return this.http.put<OperationResult>("/api/groups/add", model);
    }

    public editGroup(id: number | string, model: any): Observable<OperationResult> {
        return this.http.post<OperationResult>(`/api/groups/edit/${id}`, model);
    }

    public deleteGroup(id:number|string): Observable<OperationResult>{
        return this.http.delete<OperationResult>(`/api/groups/delete/${id}`);
    }
}