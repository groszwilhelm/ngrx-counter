import { Component, ViewChild } from '@angular/core';
import { IncrementEvent, DecrementEvent } from './actions/actions.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('counterRef') counterRef: CounterComponent;

  title = 'counter';

  public eventHandler(event: IncrementEvent | DecrementEvent) {
    if (event instanceof IncrementEvent) {
      this.counterRef.incrementCounter(1);
    } else {
      this.counterRef.decrementCounter(1);
    }
  }
}
