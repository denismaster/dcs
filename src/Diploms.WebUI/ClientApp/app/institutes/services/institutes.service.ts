import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Institute } from "../components/list/list.component";
import { OperationResult } from "../../shared/models/operation-result";

@Injectable()
export class InstitutesService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public getInstitutes(): Observable<Institute[]> {
        return this.http.get<Institute[]>(this.baseUrl + 'api/institutes');
    }

    public getInstitute(id: number | string): Observable<Institute> {
        return this.http.get<Institute>(this.baseUrl + 'api/institutes/' + id);
    }

    public addInstitute(model: any): Observable<OperationResult> {
        return this.http.put<OperationResult>("/api/institutes/add", model);
    }

    public editInstitute(id: number | string, model: any): Observable<OperationResult> {
        return this.http.post<OperationResult>(`/api/institutes/edit/${id}`, model);
    }

    public deleteInstitute(id:number|string): Observable<OperationResult>{
        return this.http.delete<OperationResult>(`/api/institutes/delete/${id}`);
    }
}