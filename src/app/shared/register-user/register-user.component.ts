import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  User: any = ['Super Admin', 'Author', 'Reader'];

  username: string;
  email: string;
  password: string;
  userType: string;

  constructor(
    public dialogRef: MatDialogRef<RegisterUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
  }

  onRegister() {
    this.dialogRef.close(
      {
        data: this.data,
        user: {
          username: this.username,
          email: this.email,
          password: this.password,
          userType: this.userType
        }
      }
    )
  }

  onReset() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.userType = '';
  }


}
