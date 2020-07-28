import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { FavoritesComponent } from './photos/favorites/favorites.component';
import { DetailedPhotoComponent } from './photos/detailed-photo/detailed-photo.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'photos/:id',
    component: DetailedPhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
