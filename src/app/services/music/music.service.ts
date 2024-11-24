import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Music {
  id: number;
  title: string;
  description: string;
  image: string;
  mp3: string;
  author: string;
  id_album: number;
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private baseApiurl = 'http://localhost:8088/cafecito/songs';

  constructor(private http: HttpClient) { }

  getAllMusic(): Observable<Music[]> {

    return this.http.get<Music[]>(`${this.baseApiurl}/all`);
  }

  createMusic(
    music: {
      title: string,
      description: string,
      image: string,
      mp3: string,
      author: string
    }): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(`${this.baseApiurl}/create`, music, {headers });
    }

    updateMusic(id: number, music: any): Observable<any> {
      return this.http.put(`${this.baseApiurl}/update/${id}`, music);
    }

    deleteMusic(id: number): Observable<any> {
      return this.http.delete(`${this.baseApiurl}/delete/${id}`);
    }

    getMusicById(id: number): Observable<any> {
      return this.http.get(`${this.baseApiurl}/find/${id}`);
    }
}
