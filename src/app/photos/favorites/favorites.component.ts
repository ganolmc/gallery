import { Component, OnInit } from '@angular/core';
import { Image, PhotosService } from 'src/app/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  images: Image[];

  constructor(private photosService: PhotosService, private router: Router) {}

  ngOnInit(): void {
    this.images = this.photosService.getFavorites();
  }

  /**
   * On photo click handler
   * @param imageId clicked image id
   */
  onPhotoClick(imageId: string) {
    this.router.navigate(['/photos/', imageId]);
  }
}
