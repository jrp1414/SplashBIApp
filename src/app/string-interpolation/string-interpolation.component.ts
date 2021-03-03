import { Component } from "@angular/core";

@Component({
    selector: "app-si",
    templateUrl: "./string-interpolation.component.html"
})
export class StringInterpolationComponent {
    num1 = 10;
    num2: number = 15;
    fName: string = "Ram";
    termsAndConditions: boolean = false;
    lName: any = "Sharma";
    person1: Person = { Name: "Ram", Address: "Hyderabad" };
    person2: Person;
    imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.png";

    constructor() {
        // this.num1 = "scdsf"
        // this.lName = 15;
        this.person2 = new Person();
    }

    getFullName():string {
        return this.fName + " " + this.lName;
    }


}

class Person {
    Name: string;
    Address: string;
}