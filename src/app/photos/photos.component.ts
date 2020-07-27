import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, AfterViewInit {
  @ViewChild('anchor') anchor: ElementRef;

  isLoading = false;
  images = [];

  /**
   * Intersection observer
   */
  private observer!: IntersectionObserver;

  constructor(private photosService: PhotosService, private host: ElementRef) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(this.onIntersect.bind(this));
    this.observer.observe(this.anchor.nativeElement);
  }

  private getPhotos(): void {
    this.isLoading = true;
    this.photosService.getImages().subscribe(images => {
      this.images = this.images.concat(images);
      this.isLoading = false;
    });
  }

  private onIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.getPhotos();
      }
    });
  }
}
