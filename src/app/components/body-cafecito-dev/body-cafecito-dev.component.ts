import { Component, OnInit } from '@angular/core';
import { SongdevService } from '../../services/song/songdev.service';

interface Song {
  id: number;
  title: string;
  description: string;
  image: string;
  mp3: string;
  author: string
}

@Component({
  selector: 'app-body-cafecito-dev',
  templateUrl: './body-cafecito-dev.component.html',
  styleUrl: './body-cafecito-dev.component.css'
})
export class BodyCafecitoDevComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongdevService) {}

  ngOnInit(): void {
    this.songService.getSongs().subscribe((data: Song[]) => {
      this.songs = data;
    })
  }
}
