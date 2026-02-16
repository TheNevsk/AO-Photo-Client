import { Routes } from '@angular/router';
import {Gallery} from './gallery/gallery';
import {Thumbnails} from './thumbnails/thumbnails';
import {Globals} from '../shared/globals';

export const routes: Routes = [
  {path: '', component: Thumbnails, resolve: {galleryMetadata: Globals.resolveGalleryMetadata}},
  {path: 'gallery/:name', component: Gallery, resolve: {galleryMetadata: Globals.resolveGalleryMetadata}},
];
