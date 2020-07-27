import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  /** Amount of images loaded by each time */
  imagesAmount = 30;

  constructor() {}

  getImages(): Observable<string[]> {
    let imagesArray = [];
    for (let i = 0; i < this.imagesAmount; i++) {
      imagesArray.push(faker.image.abstract());
    }
    return interval(250).pipe(
      take(1),
      map(() => imagesArray)
    );
  }
}
