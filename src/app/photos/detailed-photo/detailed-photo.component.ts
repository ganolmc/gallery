import { Component, OnInit } from '@angular/core';
import { PhotosService, Image } from 'src/app/photos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailed-photo',
  templateUrl: './detailed-photo.component.html',
  styleUrls: ['./detailed-photo.component.scss']
})
export class DetailedPhotoComponent implements OnInit {
  image: Image;

  constructor(private photosService: PhotosService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.params.id;
    this.image = this.photosService.getFavoritePhotoById(photoId);
  }

  /**
   * Handler for remove button click
   */
  onRemoveBtnClick() {
    const result = this.photosService.removePhotoFromFavorites(this.image.id);
    if (result) {
      this.router.navigate(['/favorites']);
    }
  }
}
