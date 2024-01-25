import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})

export class CharacterComponent {
  characters = [
    { name: 'Yozano', background: "../../assets/yozano.png"},
    { name: 'Kenji', background: "../../assets/ken.png"},
    { name: 'Dazai', background: "../../assets/dazai.png"},
    { name: 'Atsushi', background: "../../assets/atsushi.png"},
    { name: 'Kunikida', background: "../../assets/kunikida.png"},
    { name: 'Tanizaki', background: "../../assets/tanizaki.png"},
    { name: 'Ranpo', background: "../../assets/ranpo.png"},
  ]

  theme = "../../../assets/theme.mp3";
  audio: HTMLAudioElement | undefined;

  ngOnInit(){
    this.playAudio()
  }

  playAudio(){
    this.audio = new Audio();
    this.audio.src = this.theme;
    this.audio.load();
    this.audio.play();
  }

  stopAudio() {
    if(this.audio){
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  playAgain() {
    this.playAudio();
  }


}
