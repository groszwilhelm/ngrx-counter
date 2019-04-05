import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public countNumber = 0;

  public incrementCounter(increment: number) {
    this.countNumber += increment;
  }

  public decrementCounter(decrement: number) {
    this.countNumber -= decrement;
  }
}
