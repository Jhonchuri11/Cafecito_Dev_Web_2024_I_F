import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { MusicService } from '../../../services/music/music.service';

@Component({
  selector: 'app-update-music',
  templateUrl: './update-music.component.html',
  styleUrl: './update-music.component.css'
})
export class UpdateMusicComponent implements OnInit {

  editMusicForm: FormGroup;

  id: number = this.activeRoute.snapshot.params["id"];

  constructor(
    private fb: FormBuilder, 
    private activeRoute: ActivatedRoute, 
    private router: Router, 
    private musicService: MusicService ) {
      this.editMusicForm = this.fb.group ({
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        image: ['', [Validators.required]],
        mp3: ['', [Validators.required]],
        author: ['', [Validators.required]],
        idAlbum: ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
      
  }

  getAlMusic() {
    this.musicService.getMusicById(this.id).subscribe((res) => {
      console.log(res);
      this.editMusicForm.patchValue(res);
    })
  }
  
  
}
