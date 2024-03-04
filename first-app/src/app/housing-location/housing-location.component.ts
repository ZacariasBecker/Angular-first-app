import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
