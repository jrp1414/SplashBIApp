import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {
  // @ViewChild("signUp") form;
  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.form);
  }

  onSubmit(value) {
    // console.log(this.form);
    console.log(value);
  }

}
