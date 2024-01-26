import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})

export class PanelComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient){}

  characters: any;

  ngOnInit(){
    this.httpClient.get('http://localhost:8000/api/characters')
      .subscribe((response: any) => {
        console.log(response.characters)
        this.characters = response.characters
      })
  }

  navToCharacter(character: string){
    this.router.navigate([character.toLowerCase()]);
  }

}

// characters = [
//   { name: 'Yosano', background: "../../assets/panels/yosano.png"},
//   { name: 'Kenji', background: "../../assets/panels/ken.png"},
//   { name: 'Dazai', background: "../../assets/panels/dazai.png"},
//   { name: 'Atsushi', background: "../../assets/panels/atsushi.png"},
//   { name: 'Kunikida', background: "../../assets/panels/kunikida.png"},
//   { name: 'Tanizaki', background: "../../assets/panels/tanizaki.png"},
//   { name: 'Ranpo', background: "../../assets/panels/ranpo.png"},
// ]