import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Album {
  id: number,
  nombre_album: string,
  artista: string,
  anio_lanzamiento: number
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private baseAppiUrl = 'http://localhost:8088/cafecito/albums';

  constructor(private http: HttpClient ) { }

  // Funcion para listar todos los albums
  getAllAlbums(): Observable<Album[]> {

    return this.http.get<Album[]>(`${this.baseAppiUrl}/all`)
  }

  // Funcion para crear nuevo album
  createAlbum(
    album: {
      nombre_album: string,
      artista: string,
      anio_lanzamiento: number
    }): Observable<any> {
      const headers = new HttpHeaders({
        'Content-type': 'application/json'});
        return this.http.post<any>(`${this.baseAppiUrl}/create`, album, {headers })
    }

    updateAlbum(id: number, album: any): Observable<any> {
      return this.http.put(`${this.baseAppiUrl}/update/${id}`, album);
    }

    deleteAlbum(id: number): Observable<any> {
      return this.http.delete(`${this.baseAppiUrl}/delete/${id}`);
    }

    getAlbumById(id: number): Observable<any> {
      return this.http.get(`${this.baseAppiUrl}/find/${id}`);
    }
}
