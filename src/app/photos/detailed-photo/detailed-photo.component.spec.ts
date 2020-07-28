import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPhotoComponent } from './detailed-photo.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailedPhotoComponent', () => {
  let component: DetailedPhotoComponent;
  let fixture: ComponentFixture<DetailedPhotoComponent>;
  let PhotosService: any;
  let mockPhotosService = jasmine.createSpyObj('PhotosService', ['getFavoritePhotoById', 'removePhotoFromFavorites']);
  mockPhotosService.getFavoritePhotoById.and.returnValue({
    id: '1',
    url: 'test.test'
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DetailedPhotoComponent],
      providers: [
        {
          provide: PhotosService,
          useValue: mockPhotosService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
