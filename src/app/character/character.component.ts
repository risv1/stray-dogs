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

}
