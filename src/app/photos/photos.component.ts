import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Image } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('anchor') anchor: ElementRef;

  isLoading = false;
  images: Image[] = [];

  /**
   * Intersection observer
   */
  private observer!: IntersectionObserver;

  /**
   * Subject for notifying all subscription when component is destroyed
   */
  private destroyed$: Subject<void> = new Subject<void>();

  constructor(private photosService: PhotosService, private host: ElementRef) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(this.onIntersect.bind(this));
    this.observer.observe(this.anchor.nativeElement);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private getPhotos(): void {
    this.isLoading = true;
    this.photosService
      .getImages()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        images => {
          this.images = this.images.concat(images);
          this.isLoading = false;
        },
        error => {
          throw new Error(error);
        }
      );
  }

  private onIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.getPhotos();
      }
    });
  }
}
