import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Image, PhotosService } from '../../photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() image: Image;

  constructor(private router: Router, private photosService: PhotosService) {}

  ngOnInit(): void {}

  /**
   * On photo click handler
   * @param event click DOM event
   */
  onPhotoClick(event: MouseEvent): void {
    this.photosService.addPhotoToFavorites(this.image);
  }
}
