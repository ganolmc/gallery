import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface MenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      path: '/',
      label: 'Photos'
    },
    {
      path: 'favorites',
      label: 'Favorites'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
