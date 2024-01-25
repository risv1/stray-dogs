import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})

export class CharacterComponent {
  backgrounds = [
    { name: "Yosano", background: "../../assets/backgrounds/yosanoB.png"},
    { name: "Kenji", background: "../../assets/backgrounds/kenjiB.png"},
    { name: "Dazai", background: "../../assets/backgrounds/dazaiB.png"},
    { name: "Atsushi", background: "../../assets/backgrounds/atsushiB.png"},
    { name: "Kunikida", background: "../../assets/backgrounds/kunikidaB.png"},
    { name: "Tanizaki", background: "../../assets/backgrounds/tanizakiB.png"},
    { name: "Ranpo", background: "../../assets/backgrounds/ranpoB.png"},
  ]

  currentBackground: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentBackground = this.backgrounds.find(background => background.name.toLowerCase() === params['character']);
    });
  }

}
