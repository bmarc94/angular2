import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
 
    login(username: string, password: string) {
        return this.http.get('/app/shared/authentication/users.json', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                /*WIP : ajouter un mock*/
                if(username === response.json().username){
                    localStorage.setItem('currentUser', JSON.stringify(username));
                }else{
                    throw "Unknow username " + username;
                    
                }               
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}