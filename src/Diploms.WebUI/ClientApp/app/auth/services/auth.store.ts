import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthStateInfo } from './token.service';
import { USER_AUTH_KEY } from '../services/auth.service';

@Injectable()
export class AuthStore {
    private subject = new BehaviorSubject<AuthStateInfo|undefined>(undefined);

    constructor(){
        //when we use serverside rendering there is now window object. here is a code to find out is there a window object or not
        var w = (1,eval)("this");
        if(w && w.localStorage){
            const storageValue = w.localStorage.getItem(USER_AUTH_KEY);

            if(!storageValue) return;

            try{
                const state = JSON.parse(storageValue) as AuthStateInfo;
                this.setAuthState(state);
            }
            catch(err){

            }
        }
    }

    get authState(): AuthStateInfo | undefined {
        return this.subject.getValue();
    }

    get authStateChanges$(): Observable<any> {
        return this.subject.asObservable();
    }

    setAuthState(newState: AuthStateInfo) {
        const state = Object.assign(this.authState || {}, newState);
        this.subject.next(state);
    }

    logout() {
        this.subject.next(undefined);
    }
}