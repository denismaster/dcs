import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthStore } from '../services/auth.store';
import { JwtHelper } from '../helpers/jwt.helper';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthStore, private jwt: JwtHelper) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const authState = this.auth.authState;

        if (authState && !this.jwt.isTokenExpired(authState.refreshToken)) {
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
