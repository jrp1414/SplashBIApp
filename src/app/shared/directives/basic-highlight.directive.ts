import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[basic-highlight]"
})
export class BasicHighlightDirective implements OnInit {

    constructor(private el: ElementRef) {
        // let person1: Person = new Person("Ram", "Pune");
        // console.log(person1.Name);
        // console.log(person1.Address);    
    }

    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = "yellow";
    }

}


// class Person {
//     constructor(public Name: string, public Address: string) {

//     }
// }

// class Person{
//     constructor(name:string, address:string){
//         this.Name = name;
//         this.Address = address;        
//     }
//     Name:string;
//     Address:string;
// }