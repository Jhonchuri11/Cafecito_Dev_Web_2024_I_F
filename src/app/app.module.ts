import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMusicComponent } from './components/music/create-music/create-music.component';
import { ListMusicComponent } from './components/music/list-music/list-music.component';
import { NavCafecitoDevComponent } from './components/nav-cafecito-dev/nav-cafecito-dev.component';
import { BodyCafecitoDevComponent } from './components/body-cafecito-dev/body-cafecito-dev.component';
import { FooterCafecitoDevComponent } from './components/footer-cafecito-dev/footer-cafecito-dev.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioCafecitoDevComponent } from './components/inicio-cafecito-dev/inicio-cafecito-dev.component';
import { LoginCafecitoDevComponent } from './components/login-cafecito-dev/login-cafecito-dev.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAlbumsComponent } from './components/album/create-albums/create-albums.component'; 
import { ListarAlbumsComponent } from './components/album/listar-albums/listar-albums.component';
import { UpdateAlbumsComponent } from './components/album/update-albums/update-albums.component';
import { UpdateMusicComponent } from './components/music/update-music/update-music.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    ListMusicComponent,
    NavCafecitoDevComponent,
    BodyCafecitoDevComponent,
    FooterCafecitoDevComponent,
    InicioCafecitoDevComponent,
    LoginCafecitoDevComponent,
    CreateAlbumsComponent,
    CreateMusicComponent,
    ListarAlbumsComponent,
    UpdateAlbumsComponent,
    UpdateMusicComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '491351333559-s04f9n3i28rd108mn4ub5eblfhl43g1l.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.log(err);
        }
      } as SocialAuthServiceConfig,
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
