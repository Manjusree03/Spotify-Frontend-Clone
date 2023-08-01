import { Component, Input, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/services/serachbar.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent {
  @Input() public number!: string;
  @Input() public image!: string;
  @Input() public title!: string;
  @Input() public section!: string;
  @Input() public album!: string;
  @Input() public date!: string;
  @Input() public time!: string;
  @Input() public audioSource!: string;

  hover: boolean = false;
  audio: HTMLAudioElement | null = null;
  isPlaying: boolean = false;

  constructor() {}

  ngOnInit() {
    this.audio = new Audio(this.audioSource);
    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
    });
  }

  playSong(): void {
    if (this.audio) {
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }

  toggleHover(isHovered: boolean) {
    this.hover = isHovered;
  }
}
