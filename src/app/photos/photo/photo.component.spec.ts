import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PhotoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    spyOn(component, 'onPhotoClick');
    component.image = {
      id: 'test',
      url: 'http://lorempixel.com/640/480/abstract'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render an image and click handler is called', () => {
    const image = fixture.debugElement.query(By.css('.photo')).nativeElement;
    expect(image.src).toEqual(component.image.url);
    image.click();
    expect(component.onPhotoClick).toHaveBeenCalled();
  });
});
