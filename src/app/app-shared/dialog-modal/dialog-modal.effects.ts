import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { tap, map, mergeMap, exhaust, exhaustMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { openDialog, resultReceived } from './dialog-modal.actions';

@Injectable()
export class DialogModalEffects {
    constructor(private actions: Actions,
        public dialog: MatDialog) { }

    @Effect()
    openDialog = this.actions.pipe(ofType(openDialog),
        exhaustMap(action => {
            let dialogRef = this.dialog.open(action.component, action.config);
            return dialogRef.afterClosed();
        }),
        map((result: any) => {
            return resultReceived({ data: result });
        })
    );
}