import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { UserAuthInfo } from './token.service';
import { getUserAuthInfo } from '../services/auth.service';

@Injectable()
export class AuthInfoService {
    private subject = new Subject<UserAuthInfo>();
    constructor(private router: Router) { }

    ngOnInit(){
        const current = {
            token:"rere", refreshToken:"grighrihg"
        };
        if(current) this.updateInfo(current);
        else
        this.clear();
    }

    getUserAuthInfo(): Observable<any> {
        return this.subject.asObservable();
    }

    updateInfo(userInfo: UserAuthInfo) {
        this.subject.next(userInfo);
    }

    clear() {
        // clear alerts
        this.subject.next();
        this.router.navigate(["/sign-in"])
    }
}