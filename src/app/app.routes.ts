import { Routes } from '@angular/router';
import {Gallery} from './gallery/gallery';
import {Thumbnails} from './thumbnails/thumbnails';

export const routes: Routes = [
  {path: '', component: Thumbnails},
  {path: 'gallery/:name', component: Gallery},
];
