import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { PhotosService } from 'src/app/photos.service';

const mockImages = [{ id: '01', url: 'test' }];

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let mockPhotosService = jasmine.createSpyObj('PhotosService', ['getFavorites']);
  mockPhotosService.getFavorites.and.returnValue(mockImages);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FavoritesComponent],
      providers: [
        {
          provide: PhotosService,
          useValue: mockPhotosService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    spyOn(component, 'onPhotoClick');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onPhotoClick function to be called after click on photo', () => {
    const photoElem = fixture.debugElement.query(By.css('.favorites')).children[0].children[0].nativeElement;
    photoElem.click();
    expect(component.onPhotoClick).toHaveBeenCalled();
  });
});
