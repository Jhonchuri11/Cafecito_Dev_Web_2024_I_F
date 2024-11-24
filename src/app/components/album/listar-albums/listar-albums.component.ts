import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlbumService } from '../../../services/album/album.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  'jquery';
import { Router } from '@angular/router';
import { error } from 'console';

interface Album {
  id: number;
  nombre_album: string;
  artista: string;
  anio_lanzamiento: number;
}

@Component({
  selector: 'app-listar-albums',
  templateUrl: './listar-albums.component.html',
  styleUrls: ['./listar-albums.component.css']
})
export class ListarAlbumsComponent implements OnInit {

  albums: any[] = [];

  albumForm: FormGroup;
  editAlbumForm: FormGroup;
  currentAlbumId: number | null = null;


  @ViewChild('createAlbumModal') createAlbumModal!: ElementRef;

  @ViewChild('editAlbumModal') editAlbumModal!: ElementRef;


  constructor(private fb: FormBuilder, private router: Router, private albumService: AlbumService) {
    this.albumForm = this.fb.group({
      nombre_album: ['', Validators.required],
      artista: ['', Validators.required],
      anio_lanzamiento: ['', Validators.required]
    });

    this.editAlbumForm = this.fb.group({
      nombre_album: ['', Validators.required],
      artista: ['', Validators.required],
      anio_lanzamiento: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.getAllAlbum();
  }

  getAllAlbum(): void {
    this.albumService.getAllAlbums().subscribe(
      (res) => {
        this.albums = res;
    },
    (error) => {
      console.error('Error al obtener', error);
    }
  )
}

  
  createAlbum(): void {
    if (this.albumForm.valid) {
      this.albumService.createAlbum(this.albumForm.value).subscribe(response => {
        this.albums.push(response);
        this.closeModal();
        this.albumForm.reset();
      });
    } else {
      this.albumForm.markAllAsTouched();
    }
  }
    

  editAlbum(album: Album): void {
    this.currentAlbumId = album.id;
    this.editAlbumForm.patchValue(album);
    ($(`#editAlbumModal`) as any).modal('show');
  }

  /*
  updateAlbum(): void {
    if (this.editAlbumForm.valid && this.currentAlbumId !== null) {
      this.albumService.updateAlbum(this.currentAlbumId, this.editAlbumForm.value).subscribe(response => {
        const index = this.listAlbums.findIndex(album => album.id === this.currentAlbumId);
        if (index !== -1) {
          this.listAlbums[index] = response;
        }
        this.editAlbumForm.reset();
        this.currentAlbumId = null;
        this.router.navigate(["/list-albums"]);
      });
    } else {
      this.editAlbumForm.markAllAsTouched();
    }
  }
    */

  deleteAlbum(id: number) 
  {
    console.log('Deleting album with id:', id);
    this.albumService.deleteAlbum(id).subscribe(res => {

      console.log(res);
      this.getAllAlbum();
    },
    (error) => {
      console.error('Error deleting album:', error);
    }
  );
}
  
  closeModal(): void {
    ($(`#editAlbumModal`) as any).modal('hide');
  }

}
