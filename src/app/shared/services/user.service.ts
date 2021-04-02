import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as locationJson from "./location.json";
import { User, UserAuthInfo } from './user';
import * as usersJson from "./users.json";

@Injectable({ providedIn: 'root' })
export class UserService {
    private locations: any[] = (locationJson as any).default;
    private users: any[] = (usersJson as any).default;
    constructor(private http: HttpClient) { }
    public userInfo:UserAuthInfo;

    getStates() {
        return this.locations.map((l) => l.Name).sort();
    }

    getCities(state: string) {
        return this.locations.find(s => s.Name == state).Cities;
    }

    getSkills() {
        return ["C#", "Angular", "ASP.Net", "jQuery", "Javascript"];
    }

    getUsers() {
        return this.users;
    }

    checkEmailExists(email: string) {
        return this.users.find(u => u.Email == email) ? true : false;
    }

    signUpUser(user: User) {
        return this.http.post(`${environment.apiUrl}/SignUpUser`, user);
    }

    login(emailId: string, password: string) {
        let options: { [key: string]: HttpHeaders } = {
            headers: new HttpHeaders({
                "Content-Type": "application/x-www-form-urlencoded"
            })
        };
        return this.http.post(`${environment.apiUrl}/login`,
            `grant_type=password&userName=${emailId}&password=${password}`, options);
    }


}