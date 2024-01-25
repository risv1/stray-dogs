import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})

export class PanelComponent {

  constructor(private router: Router){}

  characters = [
    { name: 'Yosano', background: "../../assets/panels/yosano.png"},
    { name: 'Kenji', background: "../../assets/panels/ken.png"},
    { name: 'Dazai', background: "../../assets/panels/dazai.png"},
    { name: 'Atsushi', background: "../../assets/panels/atsushi.png"},
    { name: 'Kunikida', background: "../../assets/panels/kunikida.png"},
    { name: 'Tanizaki', background: "../../assets/panels/tanizaki.png"},
    { name: 'Ranpo', background: "../../assets/panels/ranpo.png"},
  ]

  navToCharacter(character: string){
    this.router.navigate([character.toLowerCase()]);
  }

}
