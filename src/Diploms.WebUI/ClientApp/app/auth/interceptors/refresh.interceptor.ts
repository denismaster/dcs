import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService, getUserAuthInfo } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { JwtHelper } from '../helpers/jwt.helper';

@Injectable()
export class RefreshInterceptor implements HttpInterceptor {
    constructor(private jwtHelper: JwtHelper, private tokenService: TokenService) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userInfo = getUserAuthInfo();

        if (userInfo) {
            const { token, refreshToken } = userInfo;

            if (this.jwtHelper.isTokenExpired(token) && !this.jwtHelper.isTokenExpired(refreshToken)) {
                return this.tokenService.refreshAuthentication(refreshToken).switchMap(_ => next.handle(request));
            }
        }

        return next.handle(request);
    }
}