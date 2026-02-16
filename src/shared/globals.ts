import {inject} from '@angular/core';
import {BackendService} from './services/backend-service';
import {map} from 'rxjs';

export class Globals {

  public static parseGalleryMetadata(md: string): Map<string, number> {
    return new Map<string, number>(Object.entries(JSON.parse(md)) as [string, number][]);
  }

  public static resolveGalleryMetadata() {
    return inject(BackendService).getGalleryMetadata().pipe(map(Globals.parseGalleryMetadata));
  }
}
