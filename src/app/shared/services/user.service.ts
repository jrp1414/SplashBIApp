import { Injectable } from '@angular/core';
import * as locationJson from "./location.json";
import * as usersJson from "./users.json";

@Injectable({ providedIn: 'root' })
export class UserService {
    private locations: any[] = (locationJson as any).default;
    private users: any[] = (usersJson as any).default;
    constructor() { }


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


}