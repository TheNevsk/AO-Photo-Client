import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Globals} from '../../shared/globals';


@Component({
  selector: 'app-thumbnails',
  imports: [RouterLink],
  templateUrl: './thumbnails.html',
  styleUrl: './thumbnails.css',
})
export class Thumbnails {
  galleryNames: string[] = [];

  ngOnInit() {
    this.galleryNames = Array.from(Globals.galleryMetadata.keys());
  }

  formatName(name: string): string {
   return (name + "-").split("-")
     .reduce((s, c) => (s.charAt(0).toUpperCase() + s.slice(1) + " "
      + c.charAt(0).toUpperCase() + c.slice(1)));
  }
}
