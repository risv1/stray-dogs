import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../models/character.interface';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent implements OnInit {
  constructor(private router: Router, private httpClient: HttpClient) {}

  characters: Character[] | undefined;

  ngOnInit() {
    this.httpClient
      .get('http://localhost:8000/api/characters')
      .subscribe((response: any) => {
        console.log(response.characters);
        this.characters = response.characters;
      });
  }

  navToCharacter(character: string) {
    this.router.navigate([character.toLowerCase()]);
  }
}
