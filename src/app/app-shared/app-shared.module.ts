import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { ExceptionHandlingComponent } from './exception-handling/exception-handling.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Features } from '../enums/features.enum';
import { DialogModalEffects } from './dialog-modal/dialog-modal.effects';
import * as dialogModalReducer from './dialog-modal/dialog-modal.reducer';


@NgModule({
  declarations: [
    DialogModalComponent,
    ExceptionHandlingComponent
  ],
  imports: [
    StoreModule.forFeature(Features.AppShared, dialogModalReducer.reducer),
    EffectsModule.forFeature([DialogModalEffects]),
    CommonModule
  ],
  exports: [
    DialogModalComponent,
    ExceptionHandlingComponent
  ],
  providers: []
})
export class AppSharedModule { }
