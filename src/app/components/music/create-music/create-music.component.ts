import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music/music.service';
import { AlbumService } from '../../../services/album/album.service';
import { Router } from '@angular/router';


interface Album {
  id: number;
  nombre_album: string;
  artista: string
  anio_lanzamiento:  number
}

interface Cancion {
  title: string;
  description: string;
  image: string;
  mp3: string;
  author: string;
  idAlbum: Album;
}
@Component({
  selector: 'app-create-music',
  templateUrl: './create-music.component.html',
  styleUrl: './create-music.component.css'
})
export class CreateMusicComponent implements OnInit {

  albumss: Album[] = [];

  newCancion: Cancion = {
    title: '',
    description: '',
    image: '',
    mp3: '',
    author: '',
    idAlbum: { id: 0, nombre_album: '', artista: '', anio_lanzamiento: 0 }
  };

  constructor(private cancionService: MusicService, private router: Router, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAllAlbums().subscribe(
      (response) => {
        this.albumss = response;
      },
      (error) => {
        console.log('Error loading alnbums', error);
      }
    );
  }

  createCancion(): void {
    this.cancionService.createMusic(this.newCancion).subscribe(
      (response) => {
        console.log('song created', response);
        this.newCancion = {
          title: '',
          description: '',
          image: '',
          mp3: '',
          author: '',
          idAlbum: { id: 0, nombre_album: '', artista: '', anio_lanzamiento: 0 }
        };
        this.router.navigate(["/home"]);

      },
      (error) => {
        console.log('Erro al crear cancion', error);
      }
    );
  }
}
