import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public countNumber = 0;

  public increment(increment: number) {
    this.countNumber += increment;
  }

  public decrement(decrement: number) {
    this.countNumber -= decrement;
  }
}
