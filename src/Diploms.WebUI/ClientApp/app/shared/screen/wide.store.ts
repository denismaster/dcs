import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class WideStore {
    private subject = new BehaviorSubject<boolean>(false);

    get state(): boolean {
        return this.subject.getValue();
    }

    get stateChanges$(): Observable<boolean> {
        return this.subject.asObservable();
    }

    setWideState(newState: boolean) {
        this.subject.next(newState);
    }
}