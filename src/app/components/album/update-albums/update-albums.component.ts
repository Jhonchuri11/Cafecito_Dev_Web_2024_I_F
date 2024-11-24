import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from '../../../services/album/album.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-update-albums',
  templateUrl: './update-albums.component.html',
  styleUrl: './update-albums.component.css'
})
export class UpdateAlbumsComponent{

  
  editAlbumForm: FormGroup;

  id: number = this.activeRoute.snapshot.params["id"];

  constructor(
    private fb: FormBuilder, 
    private activeRoute: ActivatedRoute, 
    private router: Router, 
    private albumService: AlbumService ) {
      this.editAlbumForm = this.fb.group ({
        nombre_album: ['', [Validators.required]],
        artista: ['', [Validators.required]],
        anio_lanzamiento: ['', [ Validators.required]]
      })
     }


  ngOnInit(): void {
  
    this.getAlbumById();
  }


  getAlbumById() {
    this.albumService.getAlbumById(this.id).subscribe((res) => {
      console.log(res);
      this.editAlbumForm.patchValue(res);
    });

  }

  updateAlbum(): void {
    if (this.editAlbumForm.invalid) {
      this.editAlbumForm.markAllAsTouched();
      return;
    }
  
    const albumData = this.editAlbumForm.value;
    this.albumService.updateAlbum(this.id, albumData).subscribe(
      (res) => {
        console.log('Album updated:', res);
        this.router.navigate(['/list-albums']).then(() => {
          console.log('Navigated to /list-albums');
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error updating album:', error);
        if (error.error instanceof ErrorEvent) {
          // Client-side or network error
          console.error('Client-side error:', error.error.message);
        } else {
          // Backend error
          console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
      }
    );
  }
}
