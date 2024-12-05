import { Component } from '@angular/core';
import { CaughtPokemon } from '../../model/interface/caught-pokemon';
import { CommonModule } from '@angular/common';
import * as Papa from 'papaparse'; // Importing papaparse
import { HttpClient } from '@angular/common/http'; // For fetching CSV

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  pkmns: CaughtPokemon[] = [];

}
