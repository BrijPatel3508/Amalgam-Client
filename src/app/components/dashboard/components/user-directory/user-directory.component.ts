import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteUser, loadUsers } from '../../dashboard.actions';
import { IDashboardFeature } from '../../interfaces/dashboardFeature.interface';
import * as dashboardReducer from '../../dashboard.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-directory',
  templateUrl: './user-directory.component.html',
  styleUrls: ['./user-directory.component.scss']
})
export class UserDirectoryComponent implements OnInit {

  selectUsers: Observable<IUser[]> = this.store.select(dashboardReducer.selectUsers);

  constructor(private store: Store<{ dashboard: IDashboardFeature }>) { }


  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  deleteUser(user: IUser) {
    this.store.dispatch(deleteUser({ slid: user.slid }));
  }

}
