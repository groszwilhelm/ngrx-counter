import { Action } from '@ngrx/store';

export const INCREMENT_COUNTER = '[Counter] Increment counter';
export const DECREMENT_COUNTER = '[Counter] Decrement counter ';

export const GET_COUNTER = '[Counter] Get counter';
export const GET_COUNTER_SUCCESS = '[Counter] Get counter success';
export const GET_COUNTER_ERROR = '[Counter] Get counter error';

export class IncrementCounter implements Action {
  readonly type = INCREMENT_COUNTER;

  constructor(public payload: number) {}
}

export class DecrementCounter implements Action {
  readonly type = DECREMENT_COUNTER;

  constructor(public payload: number) {}
}

export class GetCounter implements Action {
  readonly type = GET_COUNTER;
}

export class GetCounterSuccess implements Action {
  readonly type = GET_COUNTER_SUCCESS;

  constructor(public payload: { counter: number }) {}
}

export class GetCounterError implements Action {
  readonly type = GET_COUNTER_ERROR;
}

export type Actions =
  IncrementCounter |
  DecrementCounter |
  GetCounter |
  GetCounterSuccess |
  GetCounterError;
