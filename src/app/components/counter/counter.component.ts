import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  element: number = 0;

  sumNumber() {
    this.element = this.element + 1;
  }

  initNumber() {
    this.element = 0;
  }

  resNumber() {
    this.element = this.element - 1;
    if (this.element < 0) {
      this.element = 0;
    }
  }
}
