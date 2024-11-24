import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface Song {
    id: number;
    title: string;
    description: string;
    image: string;
    mp3: string;
    author: string
}

@Injectable({
  providedIn: 'root'
})
export class SongdevService {

  private apiCafecitoDev = 'https://spotify-api-lac-kappa.vercel.app/api/songs';

  constructor(private http: HttpClient) { }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.apiCafecitoDev);
  }
}
