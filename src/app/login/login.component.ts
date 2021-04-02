import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean;
  constructor(public us: UserService, private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  Close(){
    this.dialogRef.close();
  }

  onSubmit(value) {
    this.us.login(value.EmailId, value.Password).subscribe((resp: any) => {
      localStorage.setItem("access_token", resp.access_token);
      localStorage.setItem("refresh_token", resp.refresh_token);
      localStorage.setItem("roles", resp.roles);
      localStorage.setItem("userName", resp.userName);
      this.us.userInfo = { role: resp.roles, userName: resp.userName };
      this.router.navigate(["/home"]);
    });
  }

}
