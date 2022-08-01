import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { openDialog } from 'src/app/app-shared/dialog-modal/dialog-modal.actions';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LoginComponent } from '../login/login.component';
// import { IDashboardFeature } from 'src/app/components/dashboard/interfaces/dashboardFeature.interface';
// import { LoginComponent } from '../login/login.component';
import { RegisterUserComponent } from '../register-user/register-user.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  @Output() menuClicked: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<{ shared: any }>,
    public readonly authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.removeTokenKey();
  }

  onLogin() {
    this.store.dispatch(openDialog({
      component: { ...LoginComponent },
      config: {
        data: {
          ref: 'userLogin'
        }
      }
    }));
  }

  onSignUp() {
    this.store.dispatch(openDialog({
      component: { ...RegisterUserComponent },
      config: {
        data: {
          ref: 'userSignUp'
        }
      }
    }))
  }

}
