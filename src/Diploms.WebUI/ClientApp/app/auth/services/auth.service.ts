import { Injectable } from "@angular/core";
import { JwtHelper } from "../helpers/jwt.helper";
import { HttpClient } from "@angular/common/http";
import { UserAuthInfo } from "./token.service";

export const USER_AUTH_KEY: string = "currentUser"

export interface AuthRequest{
    userName: string,
    password: string,
    rememberMe: boolean; 
}

export function getUserAuthInfo(): UserAuthInfo | null {
    const storageValue = localStorage.getItem(USER_AUTH_KEY);

    if (!storageValue) return null;

    try {
        const model = JSON.parse(storageValue) as UserAuthInfo;
        return model;
    }
    catch (error) {
        return null;
    }
}
/** 
 * Класс для управления авторизацией пользователя
 */
@Injectable()
export class AuthService {
    constructor(private jwtHelper: JwtHelper, private http: HttpClient) { }

    public login(details: AuthRequest) {
        return this.http.post<UserAuthInfo>("api/account/login", details)
            .map(result=> localStorage.setItem(USER_AUTH_KEY, JSON.stringify(result)));
    }

    public logout(): void {
        localStorage.removeItem(USER_AUTH_KEY);
    }

    public isAuthenticated(): boolean {
        const userAuthInfo = getUserAuthInfo();

        if(!userAuthInfo) return false;
        // get the token
        const { refreshToken } = userAuthInfo;
        // return a boolean reflecting 
        // whether or not the token is expired
        return !this.jwtHelper.isTokenExpired(refreshToken);
    }
}