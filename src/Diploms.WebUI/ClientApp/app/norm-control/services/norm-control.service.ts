import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class NormControlService {
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

    public createNormControlDocument(model: any) {
        return this.http.post(this.baseUrl+`api/documents/norm-control-doc`, model, { responseType: 'blob' });
    }
}