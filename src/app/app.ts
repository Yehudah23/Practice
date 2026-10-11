import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Increment } from "./increment/increment";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Increment],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Practice');
}
