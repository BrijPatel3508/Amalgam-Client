import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardEffects } from './dashboard.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Features } from 'src/app/enums/features.enum';
import * as dashboardReducer from './dashboard.reducer';
import { DashboardService } from './services/dashboard.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { AddApplicationComponent } from './components/add-application/add-application.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ShareModuleModule } from 'src/app/shared/share-module.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserDirectoryComponent } from './components/user-directory/user-directory.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddApplicationComponent,
    UserDirectoryComponent
  ],
  imports: [
    StoreModule.forFeature(Features.Dashboard, dashboardReducer.reducer),
    EffectsModule.forFeature([DashboardEffects]),
    FlexLayoutModule,
    DashboardRoutingModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [DashboardService],
})
export class DashboardModule { }
