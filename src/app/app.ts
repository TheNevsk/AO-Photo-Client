import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BackendService} from '../shared/services/backend-service';
import {ContactFooter} from './contact-footer/contact-footer';
import {Thumbnails} from './thumbnails/thumbnails';
import {Globals} from '../shared/globals';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet,Thumbnails,ContactFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AO-Photo-Client');
  constructor(private server: BackendService) {
    this.server.getGalleryMetadata().subscribe(res =>
      Globals.galleryMetadata = new Map<string, number>(Object.entries(res)));
  }
}
