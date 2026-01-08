import {Component} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {BackendService} from '../../shared/services/backend-service';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  name!: string;
  photoCount: number = 0;
  constructor(private route: ActivatedRoute, private server: BackendService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')!;
      console.log("name is " + this.name);

      this.photoCount = this.server.getGalleryPhotoCount(this.name);
    });
  }

  get photoIndexes(): number[] {
    return Array.from({ length: this.photoCount }, (_, i) => i);
  }
}
