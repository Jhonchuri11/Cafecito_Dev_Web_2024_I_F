import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCafecitoDevComponent } from './components/login-cafecito-dev/login-cafecito-dev.component';
import { InicioCafecitoDevComponent } from './components/inicio-cafecito-dev/inicio-cafecito-dev.component';
import { BodyCafecitoDevComponent } from './components/body-cafecito-dev/body-cafecito-dev.component';
import { ListMusicComponent } from './components/music/list-music/list-music.component';
import { CreateAlbumsComponent } from './components/album/create-albums/create-albums.component';
import { ListarAlbumsComponent } from './components/album/listar-albums/listar-albums.component';
import { CreateMusicComponent } from './components/music/create-music/create-music.component';
import { UpdateAlbumsComponent } from './components/album/update-albums/update-albums.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioCafecitoDevComponent
  },
  { path: 'list-music', 
    component: LoginCafecitoDevComponent
  },
  {
    path: 'explore',
    component: BodyCafecitoDevComponent
  },
  {
    path: 'home',
    component: ListMusicComponent
  },
  {
    path: 'list-albums',
    component: ListarAlbumsComponent
  },
  {
    path: 'create-album',
    component: CreateAlbumsComponent
  },
  {
    path: 'update-album/:id',
    component: UpdateAlbumsComponent
  },
  {
    path: 'cancion',
    component: CreateMusicComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
