import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelComponent } from "./panel/panel.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PanelComponent]
})

export class AppComponent {
    theme = "../..assets/theme.mp3";
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
