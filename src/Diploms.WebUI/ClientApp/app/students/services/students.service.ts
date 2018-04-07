import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Student } from "../components/list/list.component";
import { OperationResult } from "../../shared/models/operation-result";
import { SelectListItem } from "../../shared/select-list-item";

@Injectable()
export class StudentsService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.baseUrl + 'api/students');
    }

    public getGroups(): Observable<SelectListItem[]> {
        return this.http.get<SelectListItem[]>(this.baseUrl + 'api/groups/select-list');
    }

    public getStudent(id: number | string): Observable<Student> {
        return this.http.get<Student>(this.baseUrl + 'api/students/' + id);
    }

    public addStudent(model: any): Observable<OperationResult> {
        return this.http.put<OperationResult>("/api/students/add", model);
    }

    public editStudent(id: number | string, model: any): Observable<OperationResult> {
        return this.http.post<OperationResult>(`/api/students/edit/${id}`, model);
    }

    public deleteStudent(id:number|string): Observable<OperationResult>{
        return this.http.delete<OperationResult>(`/api/students/delete/${id}`);
    }
}