import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService, getUserAuthInfo } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Token interceptor is working');

        const auth = this.injector.get(AuthService);

        const userInfo = getUserAuthInfo();
        if(auth.isAuthenticated() && userInfo )
        {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
                
        }

        return next.handle(request).retry(3);
    }
}