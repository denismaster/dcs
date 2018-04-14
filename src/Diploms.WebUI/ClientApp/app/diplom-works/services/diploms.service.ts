import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Diplom } from "../components/list/list.component";
import { OperationResult } from "../../shared/models/operation-result";
import { SelectListItem } from "../../shared/select-list-item";

@Injectable()
export class DiplomsService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public getDiploms(): Observable<Diplom[]> {
        return this.http.get<Diplom[]>(this.baseUrl + 'api/diploms');
    }

    public getGroups(): Observable<SelectListItem[]> {
        return this.http.get<SelectListItem[]>(this.baseUrl + 'api/groups/select-list');
    }

    public getDiplom(id: number | string): Observable<Diplom> {
        return this.http.get<Diplom>(this.baseUrl + 'api/diploms/' + id);
    }

    public addDiplom(model: any): Observable<OperationResult> {
        return this.http.put<OperationResult>("/api/diploms/add", model);
    }

    public editDiplom(id: number | string, model: any): Observable<OperationResult> {
        return this.http.post<OperationResult>(`/api/diploms/edit/${id}`, model);
    }

    public deleteDiplom(id:number|string): Observable<OperationResult>{
        return this.http.delete<OperationResult>(`/api/diploms/delete/${id}`);
    }
}