import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {BackendService} from '../../shared/services/backend-service';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  private galleryPath!: string;
  name!: string;
  photoCount: number = 0;
  selectedPhoto: string | null = null;
  constructor(private route: ActivatedRoute, private server: BackendService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')!;
      console.log("name is " + this.name);

      this.galleryPath = "images/"+ this.name + "/";
      this.photoCount = this.server.getGalleryPhotoCount(this.name);
    });
  }

  get photoIndexes(): number[] {
    return Array.from({ length: this.photoCount }, (_, i) => i);
  }

  //pop-up for clicked pjoto
  open(i: number) {
    this.selectedPhoto = this.galleryPath + this.name + i + ".PNG";
  }

  close() {
    this.selectedPhoto = null;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.close();
  }
}
