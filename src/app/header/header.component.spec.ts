import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.menuItems = [
      {
        path: '/',
        label: 'Photos'
      },
      {
        path: 'favorites',
        label: 'Favorites'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render buttons with correct labels', () => {
    const navItems = fixture.debugElement.query(By.css('.header')).children[0].children[0];
    expect(navItems.children[0].children[0].children[0].nativeElement.innerText).toBe(component.menuItems[0].label);
    expect(navItems.children[1].children[0].children[0].nativeElement.innerText).toBe(component.menuItems[1].label);
  });
});
