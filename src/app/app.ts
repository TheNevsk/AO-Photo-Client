import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactFooter} from './contact-footer/contact-footer';
import {Thumbnails} from './thumbnails/thumbnails';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet,Thumbnails,ContactFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AO-Photo-Client');
  constructor() {}
}
