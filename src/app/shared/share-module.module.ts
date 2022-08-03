import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterUserComponent } from './register-user/register-user.component';
import { Features } from '../enums/features.enum';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffects } from './shared.effects';
import * as sharedReducer from './shared.reducer';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    StoreModule.forFeature(Features.Shared, sharedReducer.reducer),
    EffectsModule.forFeature([SharedEffects]),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatFormFieldModule,
  ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    LoginComponent
  ]
})
export class ShareModuleModule { }
