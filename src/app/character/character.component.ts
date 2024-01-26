import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})

export class CharacterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  currentCharacter: any;

  fetchCharacter(char: any) {
    this.httpClient.get(`http://localhost:8000/api/${char}`)
    .subscribe((response: any) => {
      console.log(response.character)
      this.currentCharacter = response.character
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchCharacter(params.get('character'))
    })
  }

}
