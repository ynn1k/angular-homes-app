import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage  } from '@angular/common';
import {HousingLocation} from "../housing-location";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  template: `
    <section class="listing">
        <a [routerLink]="['details', housingLocation.id]">
          <div class="relative">
              <img [ngSrc]="housingLocation.photo" fill alt="Exterior photo of {{housingLocation.name}}" class="listing-photo">
          </div>
          <h2 class="listing-heading">{{housingLocation.name}}</h2>
          <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
        </a>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
