import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
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
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserDirectoryComponent } from './components/user-directory/user-directory.component';
import { AppMapComponent } from './components/app-map/app-map.component';
import { AgmCoreModule } from '@agm/core';
import { AppSharedModule } from 'src/app/app-shared/app-shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AddApplicationComponent,
    UserDirectoryComponent,
    AppMapComponent
  ],
  imports: [
    StoreModule.forFeature(Features.Dashboard, dashboardReducer.reducer),
    EffectsModule.forFeature([DashboardEffects]),
    DashboardRoutingModule,
    FlexLayoutModule,
    AppSharedModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDX_QgPz9VQ-BdAGnH2D5HJHcCFy8ZVQsQ'
    })
  ],
  exports: [
    DashboardComponent
  ],
  providers: [DashboardService],
})
export class DashboardModule { }
