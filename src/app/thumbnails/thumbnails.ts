import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';


@Component({
  selector: 'app-thumbnails',
  imports: [RouterLink],
  templateUrl: './thumbnails.html',
  styleUrl: './thumbnails.css',
})
export class Thumbnails {
  galleryNames: string[] = [];
  constructor(private route: ActivatedRoute) {
    this.galleryNames = Array.from(this.route.snapshot.data['galleryMetadata'].keys());
  }

  formatName(name: string): string {
   return (name + "-").split("-")
     .reduce((s, c) => (s.charAt(0).toUpperCase() + s.slice(1) + " "
      + c.charAt(0).toUpperCase() + c.slice(1)));
  }
}
