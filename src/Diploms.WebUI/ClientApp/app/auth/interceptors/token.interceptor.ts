import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService, getUserAuthInfo } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, private router: Router) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.injector.get(AuthService);

        const userInfo = getUserAuthInfo();
        if (auth.isAuthenticated() && userInfo) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            });

        }

        return next.handle(request)
            .retry(3)
            .catch(error=>this.handleErrors(error))
    }

    private handleErrors(initialError: any): Observable<any> {
        if (initialError && initialError.status === 403) {
            this.router.navigate(['/noAccess']);
            return Observable.empty();
        }
        if (initialError && initialError.status === 401) {
            this.router.navigate(['/sign-in']);
            return Observable.empty();
        }
        return Observable.throw(initialError);
    };

}