import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BackendService} from '../shared/services/backend-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AO-Photo-Client');
  private server: BackendService;
  constructor(server: BackendService) {
    this.server = server;
    this.server.callPrivateRoute();
  }
}
