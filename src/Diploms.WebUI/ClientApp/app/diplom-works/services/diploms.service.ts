import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Diplom } from "../components/list/list.component";
import { OperationResult } from "../../shared/models/operation-result";
import { SelectListItem } from "../../shared/select-list-item";
import { RequestOptions } from "@angular/http";
import { File } from '../../files/models/file';

@Injectable()
export class DiplomsService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public getDiploms(): Observable<Diplom[]> {
        return this.http.get<Diplom[]>(this.baseUrl + 'api/diploms');
    }

    public getTeachers(): Observable<SelectListItem[]> {
        return this.http.get<SelectListItem[]>(this.baseUrl + 'api/teachers/select-list');
    }

    public getStudents(): Observable<SelectListItem[]> {
        return this.http.get<SelectListItem[]>(this.baseUrl + 'api/students/select-list');
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

    public deleteDiplom(id: number | string): Observable<OperationResult> {
        return this.http.delete<OperationResult>(`/api/diploms/delete/${id}`);
    }

    public getMaterials(id:number)  {
        return this.http.get<File[]>(this.baseUrl + `api/diploms/${id}/materials`);
    }

    public uploadMaterial(id:number, formData:any) {
        const req = new HttpRequest('POST', `/api/diploms/${id}/materials`, formData, {
            reportProgress: true,
        });

        return this.http.request(req)
    }

    public uploadMaterialByType(id:number, typeId:number){
        console.log("typeId:", typeId)
        return this.http.post<any>(this.baseUrl + `api/diploms/${id}/materials/${typeId}`, {});
    }
}