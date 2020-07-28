import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { FavoritesComponent } from './photos/favorites/favorites.component';
import { DetailedPhotoComponent } from './photos/detailed-photo/detailed-photo.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PhotosComponent, PhotoComponent, FavoritesComponent, DetailedPhotoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
