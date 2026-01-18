import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Globals} from '../../shared/globals';

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
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')!;
      this.galleryPath = "images/"+ this.name + "/";
      this.photoCount = Globals.galleryMetadata.get(this.name) || 0;
    });
  }

  get photoIndexes(): number[] {
    return Array.from({ length: this.photoCount }, (_, i) => i);
  }

  //pop-up for clicked photo
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
