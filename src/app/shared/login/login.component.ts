import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.dialogRef.close(
      {
        data: this.data,
        action: 'login',
        user: {
          username: this.username,
          password: this.password
        }
      }
    )
  }

  onReset() {
    this.username = '';
    this.password = '';
  }

  loginWithGoogle() {
    this.dialogRef.close(
      {
        data: this.data,
        action: 'loginWithGoogle',
        user: {
          username: this.username,
          password: this.password
        }
      }
    )
  }

}
