import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { PhotosService } from '../photos.service';
import { Observable, interval, of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { By } from '@angular/platform-browser';
import { PhotoComponent } from './photo/photo.component';
import { RouterTestingModule } from '@angular/router/testing';

const mockImages = [{ id: '01', url: 'test' }];

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let mockPhotosService = jasmine.createSpyObj('PhotosService', ['getImages']);
  mockPhotosService.getImages.and.returnValue(of(mockImages));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PhotosComponent, PhotoComponent],
      providers: [
        {
          provide: PhotosService,
          useValue: mockPhotosService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct amount of images', fakeAsync(() => {
    flush();
    const images = fixture.debugElement.query(By.css('.photos')).children[0];
    expect(images.children.length).toEqual(mockImages.length);
  }));
});
