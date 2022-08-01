import { TemplateRef } from "@angular/core";
import { createAction, props } from "@ngrx/store";
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';

export const openDialog = createAction('[Dialog-Modal] Open Dialog',
    props<{ component: any, config?: MatDialogConfig<any> }>());

export const resultReceived = createAction('[Dialog-Modal] Result Received',
    props<{ data: any }>());
