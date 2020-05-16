import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'albums',
    loadChildren: () => import('../pages/albums/albums.module').then( m => m.AlbumsPageModule)
  },
  {
    path: 'album/:id',
    loadChildren: () => import('../pages/album/album.module').then( m => m.AlbumPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
