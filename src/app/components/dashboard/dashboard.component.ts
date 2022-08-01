import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { openDialog } from 'src/app/app-shared/dialog-modal/dialog-modal.actions';
import { IApplication } from 'src/app/interfaces/applications.interface';
import { redirectTo } from 'src/app/shared/shared.actions';
import { AddApplicationComponent } from './components/add-application/add-application.component';
import { loadApplications } from './dashboard.actions';
import { IDashboardFeature } from './interfaces/dashboardFeature.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<{ dashboard: IDashboardFeature }>) { }

  applications: IApplication[] = [
    {
      name: 'User Directory',
      version: '1.0.0',
      description: "A user directory is a file system directory on a multiuser operating system containing files for a given user of the system",
      icon: '../../../assets/user-icons.gif',
      primaryButton: 'CHECK',
      primaryButtonDisabled: false,
    },
    {
      name: 'Internet Of Things',
      version: '1.0.0',
      description: "The Internet of Things (IoT) describes the network of physical objects—“things”—that are " +
        "embedded with sensors, software, and other technologies for the purpose of connecting and " +
        "exchanging data with other devices and systems over the internet.",
      icon: '../../../assets/IOT.gif',
      primaryButton: 'CHECK',
      primaryButtonDisabled: true,
    }
  ]

  ngOnInit(): void {
    this.store.dispatch(loadApplications());
  }

  addApplication() {
    this.store.dispatch(openDialog({
      component: { ...AddApplicationComponent },
      config: {
        data: {
          ref: 'AddApplication'
        }
      }
    }))
  }

  routeTo(path: string) {
    const routePath = 'home/' + path;
    this.store.dispatch(redirectTo({ path: routePath }));
  }

}
