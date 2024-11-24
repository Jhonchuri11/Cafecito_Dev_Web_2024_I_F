import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music/music.service';

declare var google: any

interface Music {
  id: number;
  title: string;
  description: string;
  image: string;
  mp3: string;
  author: string;
  id_album: number;
}

@Component({
  selector: 'app-login-cafecito-dev',
  templateUrl: './login-cafecito-dev.component.html',
  styleUrl: './login-cafecito-dev.component.css'
})
export class LoginCafecitoDevComponent implements OnInit {

  musics: Music[] = [];

  constructor(private musicService: MusicService
  ) {}

  ngOnInit(): void {
    this.getAllMusic();
  }

  getAllMusic(): void  {
    this.musicService.getAllMusic().subscribe((data: Music[]) => {
      this.musics = data;
    })
  }

}

