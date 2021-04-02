export class User{
    FirstName:string;
    LastName:string;
    EmailId:string;
    Password:string;
    Address:string;
    RoleId:number;
}

export class UserAuthInfo{
    role?:string;
    userName?:string;
}