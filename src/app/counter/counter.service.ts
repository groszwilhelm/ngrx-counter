import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementCounter, DecrementCounter, GetCounter } from '../actions/counter.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public state$: Observable<{ counter: number }>;

  constructor(private store: Store<any>) {
    this.state$ = store.select('counterState');
  }

  public incrementCounter(value: number): void {
    this.store.dispatch(new IncrementCounter(value));
  }

  public decrementCounter(value: number): void {
    this.store.dispatch(new DecrementCounter(value));
  }

  public getCounter(): void {
    this.store.dispatch(new GetCounter());
  }
}
