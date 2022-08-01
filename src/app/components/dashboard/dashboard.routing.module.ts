import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDirectoryComponent } from './components/user-directory/user-directory.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserDirectoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
