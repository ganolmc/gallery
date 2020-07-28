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
    const favorites = this.getFavoritesPhotoFromStorage() || [];
    if (favorites.some(image => image.id === photo.id)) {
      console.log('Image already added to favorites');
    } else {
      favorites.push(photo);
    }
    this.setFavoritesToStorage(favorites);
  }

  /**
   * Get list of favorites photos
   */
  getFavorites(): Image[] {
    return this.getFavoritesPhotoFromStorage();
  }

  /**
   * Get single favorite photo by id
   * @param id favorite photo's id
   */
  getFavoritePhotoById(id: string): Image {
    const favoritesArray = this.getFavoritesPhotoFromStorage();
    if (favoritesArray && favoritesArray.length) {
      const photoObject = favoritesArray.find(photo => photo.id === id);
      return photoObject ? photoObject : null;
    }
  }

  /**
   * Remove photo from favorites
   * @param photoId Photo id
   */
  removePhotoFromFavorites(photoId: string): boolean {
    const favoritesArray = this.getFavoritesPhotoFromStorage();
    const deleteItemIndex = favoritesArray.findIndex(photo => photo.id === photoId);
    if (deleteItemIndex) {
      favoritesArray.splice(deleteItemIndex, 1);
      this.setFavoritesToStorage(favoritesArray);
      return true;
    } else {
      throw new Error('There is no image with such id in favorites');
    }
  }

  /**
   * Incapsulates logic related getting data from storage
   */
  private getFavoritesPhotoFromStorage(): Image[] {
    return JSON.parse(localStorage.getItem('favorites'));
  }

  /**
   * Incapsulates logic related setting data to storage
   * @param imagesArr array with photos
   */
  private setFavoritesToStorage(imagesArr: Image[]): void {
    localStorage.setItem('favorites', JSON.stringify(imagesArr));
  }
}
