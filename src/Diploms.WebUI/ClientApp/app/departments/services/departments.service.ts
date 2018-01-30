import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Department } from "../components/list/list.component";

@Injectable()
export class DepartmentsService {
    constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string){
        
    }

    public getDepartments(): Observable<Department[]>{
        return this.http.get<Department[]>(this.baseUrl + 'api/departments');
    }

    public getDepartment(id:number|string): Observable<Department>{
        return this.http.get<Department>(this.baseUrl + 'api/departments/'+id);
    }
}