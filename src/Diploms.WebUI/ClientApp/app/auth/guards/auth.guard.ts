import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelper } from '../helpers/jwt.helper';
import { getUserAuthInfo } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private jwtService: JwtHelper) { }

    canActivate() {
        const authInfo = getUserAuthInfo();

        if (!authInfo || this.jwtService.isTokenExpired(authInfo.refreshToken)) {
            // not logged in so redirect to login page
            this.router.navigate(['/sign-in']);
            return false;
        }

        return true;
    }
}