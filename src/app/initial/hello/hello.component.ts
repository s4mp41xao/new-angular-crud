import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hello',
  imports: [RouterModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  counter = signal(0);

  incrementCount() {
    this.counter.update((x) => x + 1);
  }

  action() {
    alert('Clicado 10 vezes');
  }

  @Input() items = [];

  @Output() alertOnClick = new EventEmitter<any>();
}
