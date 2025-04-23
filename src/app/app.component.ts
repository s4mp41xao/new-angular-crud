import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './initial/hello/hello.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-first-crud';

  name = 'Samuel';

  contador = 0;

  incrementCount() {
    this.contador++;
  }
}
