import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  @Output() actionBus$ = new EventEmitter<IncrementEvent | DecrementEvent>();

  public increment() {
    this.actionBus$
      .emit(new IncrementEvent());
  }

  public decrement() {
    this.actionBus$
      .emit(new DecrementEvent());
  }
}

export class IncrementEvent {}
export class DecrementEvent {}
