import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {
    constructor(private actions$: Actions) { }

    @Effect()
    getAttendees$ = this.actions$.pipe(
        // ofType(AttendeesActionTypes.LoadAttendees),
        // switchMap((action: LoadAttendees) =>
        //   this.eventService.getAttendees().pipe(
        //     map((attendees: Attendee[]) => new LoadAttendeesSuccess(attendees)),
        //     catchError(error => of(new LoadAttendeesFail(error)))
        //   )
        // )
    );
}