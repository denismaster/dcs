import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Department } from "../components/list/list.component";
import { OperationResult } from "../../shared/models/operation-result";

@Injectable()
export class DepartmentsService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public getDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(this.baseUrl + 'api/departments');
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
}