import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Teacher } from "../components/list/list.component";
import { OperationResult } from "../../shared/models/operation-result";
import { SelectListItem } from "../../shared/select-list-item";

@Injectable()
export class TeachersService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public getTeachers(): Observable<Teacher[]> {
        return this.http.get<Teacher[]>(this.baseUrl + 'api/teachers');
    }

    public getDepartments(): Observable<SelectListItem[]> {
        return this.http.get<SelectListItem[]>(this.baseUrl + 'api/departments/select-list');
    }

    public getPositions(): Observable<SelectListItem[]> {
        return this.http.get<SelectListItem[]>(this.baseUrl + 'api/teachers/positions');
    }

    public getTeacher(id: number | string): Observable<Teacher> {
        return this.http.get<Teacher>(this.baseUrl + 'api/teachers/' + id);
    }

    public addTeacher(model: any): Observable<OperationResult> {
        return this.http.put<OperationResult>("/api/teachers/add", model);
    }

    public editTeacher(id: number | string, model: any): Observable<OperationResult> {
        return this.http.post<OperationResult>(`/api/teachers/edit/${id}`, model);
    }

    public deleteTeacher(id:number|string): Observable<OperationResult>{
        return this.http.delete<OperationResult>(`/api/teachers/delete/${id}`);
    }
}