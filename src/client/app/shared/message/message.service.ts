import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();
    public deleteOnNavigationChange = true;

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart && this.deleteOnNavigationChange) {
                this.subject.next();
            }
        });
    }

    success(message: string, deleteOnNavigationChange = false) {
        this.deleteOnNavigationChange = deleteOnNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }

    error(message: string, deleteOnNavigationChange = false) {
        this.deleteOnNavigationChange = deleteOnNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}