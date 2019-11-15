import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CounterApiService } from '../core/api/counter-api.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as counterActions from '../actions/counter.actions';

import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class CounterEffect {

  @Effect()
  getCounter$: Observable<Action> = this.actions$
    .pipe(
      ofType(counterActions.GET_COUNTER),
      switchMap(() =>
        this.counterApiService.getCounter()
          .pipe(
            map(response => new counterActions.GetCounterSuccess(response)),
            catchError(err => of(new counterActions.GetCounterError()))
          )
      )
    );

  constructor(private actions$: Actions, private counterApiService: CounterApiService) { }
}
