import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Department } from "../components/list/list.component";
import { OperationResult } from "../../shared/models/operation-result";
import { SelectListItem } from "../../shared/select-list-item";

@Injectable()
export class DepartmentsService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public getDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(this.baseUrl + 'api/departments');
    }

    public getInstitutes(): Observable<SelectListItem[]> {
        return this.http.get<SelectListItem[]>(this.baseUrl + 'api/institutes/select-list');
    }

    public getDepartment(id: number | string): Observable<Department> {
        return this.http.get<Department>(this.baseUrl + 'api/departments/' + id);
    }

    public addDepartment(model: any): Observable<OperationResult> {
        return this.http.put<OperationResult>("/api/departments/add", model);
    }

    public editDepartment(id: number | string, model: any): Observable<OperationResult> {
        return this.http.post<OperationResult>(`/api/departments/edit/${id}`, model);
    }

    public deleteDepartment(id:number|string): Observable<OperationResult>{
        return this.http.delete<OperationResult>(`/api/departments/delete/${id}`);
    }
}