import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { USER_AUTH_KEY } from "./auth.service";
import { Subject, Observable, Observer } from "rxjs";
import { HttpBackend, HttpRequest } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { HttpEventType } from "@angular/common/http";

export class AuthStateInfo {
    token: string = "";
    refreshToken: string = "";
    userName: string = "";
    userId: number = 0;
}

@Injectable()
export class TokenService {
    private refreshUrl: string = "api/token/refresh"
    private isRefreshing: boolean = false;
    private refreshingStream: Subject<boolean> = new Subject<boolean>();
    constructor(private http: HttpBackend) { }

    public refreshAuthentication(refreshToken: string): Observable<null> {
        if (!this.isRefreshing){ 
            console.log("no request pending, starting refreshing");
            return this.tryRefreshToken(refreshToken);
            
        }

        console.log("Waiting for end of refreshing");
        return new Observable((observer: Observer<null>) => {
            this.refreshingStream.subscribe(result => {
                if (!result) {
                    observer.next(null);
                    console.log("request can now be handled");
                    observer.complete();
                }
            })
        })
    }

    private tryRefreshToken(refreshToken: string): Observable<null> {
        this.setRefreshing(true);

        const headers = new HttpHeaders({
            "Authorization": `Bearer ${refreshToken}`,
            "Content-Type": "application/json"
        });

        const request = new HttpRequest("POST", this.refreshUrl, JSON.stringify(refreshToken), { headers, responseType: "json" });

        return this.http.handle(request)
            .filter(event => event.type === HttpEventType.Response)
            .map((res: any) => res.body)
            .map((res) => {
                localStorage.setItem(USER_AUTH_KEY, JSON.stringify(res));
                return null;
            })
            .finally(() => this.setRefreshing(false))
    }

    private setRefreshing(value: boolean) {
        if(value===false) console.log("refreshing complete");
        this.isRefreshing = value;
        this.refreshingStream.next(this.isRefreshing);
    }
}