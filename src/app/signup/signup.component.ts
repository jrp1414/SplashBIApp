import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {
  // @ViewChild("signUp") form;
  hide: boolean = true;
  states: string[] = [];
  cities: string[] = [];
  skillsList: string[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.states = this.userService.getStates();
    this.skillsList = this.userService.getSkills();
  }

  ngAfterViewInit(): void {
    // console.log(this.form);
  }
 
  onSubmit(value) {
    // console.log(this.form);
    console.log(JSON.stringify(value));
  }

  stateChanged(state) {
    this.cities = this.userService.getCities(state.value);
  }

}
