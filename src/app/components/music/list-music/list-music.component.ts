import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music/music.service';

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
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrl: './list-music.component.css'
})
export class ListMusicComponent implements OnInit {

  musics: Music[] = [];

  newSong = {  title: '',
    description: '',
    image: '',
    mp3: '',
    author: '' }

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.getAllMusic();
  }

  getAllMusic(): void  {
    this.musicService.getAllMusic().subscribe((data: Music[]) => {
      this.musics = data;
    })
  }

  creaetMusic(): void {
    this.musicService.createMusic(this.newSong).subscribe(response => {
      this.musics.push(response);
      this.newSong = { 
        title: '',
        description: '',
        image: '',
        mp3: '',
        author: ''};
    })
  }
}
