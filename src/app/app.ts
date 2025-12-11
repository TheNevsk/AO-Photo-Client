import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BackendService} from '../shared/services/backend-service';
import {FontAwesomeModule, IconDefinition} from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AO-Photo-Client');
  icons: Map<string,IconDefinition>;
  private server: BackendService;
  constructor(server: BackendService) {
    //acquire contact-me icons from font-awesome
    this.server = server;
    this.server.callPrivateRoute();

    this.icons = new Map<string, IconDefinition>();

    this.icons.set("mail", faEnvelope);
    this.icons.set("fb", faFacebook);
    this.icons.set("ig", faInstagram);
  }
}
