import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Speciality } from "../components/list/list.component";
import { OperationResult } from "../../shared/models/operation-result";
import { SelectListItem } from "../../shared/select-list-item";

@Injectable()
export class SpecialitiesService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public getSpecialities(): Observable<Speciality[]> {
        return this.http.get<Speciality[]>(this.baseUrl + 'api/specialities');
    }

    public getInstitutes(): Observable<SelectListItem[]> {
        return this.http.get<SelectListItem[]>(this.baseUrl + 'api/departments/select-list');
    }

    public getSpeciality(id: number | string): Observable<Speciality> {
        return this.http.get<Speciality>(this.baseUrl + 'api/specialities/' + id);
    }

    public addSpeciality(model: any): Observable<OperationResult> {
        return this.http.put<OperationResult>("/api/specialities/add", model);
    }

    public editSpeciality(id: number | string, model: any): Observable<OperationResult> {
        return this.http.post<OperationResult>(`/api/specialities/edit/${id}`, model);
    }

    public deleteSpeciality(id:number|string): Observable<OperationResult>{
        return this.http.delete<OperationResult>(`/api/specialities/delete/${id}`);
    }
}