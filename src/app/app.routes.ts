import { Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { CharacterComponent } from './character/character.component';

export const routes: Routes = [
    {path: '', component: PanelComponent},
    {path: ':character', component: CharacterComponent}
];
