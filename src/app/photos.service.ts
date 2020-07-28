import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface Image {
  id: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  /** Amount of images loaded by each time */
  imagesAmount = 30;

  constructor() {}

  /**
   * Emulate fetch images from real API
   */
  getImages(): Observable<Image[]> {
    const imagesArray: Image[] = [];
    for (let i = 0; i < this.imagesAmount; i++) {
      imagesArray.push({
        id: new Date().toISOString() + i,
        url: faker.image.abstract()
      });
    }
    // Interval added only for emulation of real async response
    return interval(250).pipe(
      take(1),
      map(() => imagesArray)
    );
  }

  /**
   * Add photo to favorites
   * @param photo image object
   */
  addPhotoToFavorites(photo: Image): void {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.some(image => image.id === photo.id)) {
      console.log('Image already added to favorites');
    } else {
      favorites.push(photo);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  /**
   * Get list of favorites photos
   */
  getFavorites(): Image[] {
    return JSON.parse(localStorage.getItem('favorites'));
  }
}
