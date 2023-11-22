import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  template: `
    <article *ngIf="housingLocation">
        <img [src]="housingLocation.photo" alt="Photo" class="listing-photo">
        <section class="listing-description">
            <h2 class="listing-heading">{{housingLocation.name}}</h2>
            <p class="listing-location">
                {{housingLocation.city}}, {{housingLocation.state}}
            </p>
        </section>
        <section class="listing-features">
            <h2 class="section-heading">About</h2>
            <ul>
                <li>Units available: {{housingLocation.availableUnits}}</li>
                <li>Wifi: {{housingLocation.wifi}}</li>
                <li>Laundry: {{housingLocation.laundry}}</li>
            </ul>
        </section>
        <section class="listing-apply">
            <h2 class="section-heading">Apply</h2>
            <form [formGroup]="applyForm" (submit)="submitApplication()">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" formControlName="firstName">

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" formControlName="lastName">

                <label for="email">Email</label>
                <input type="text" id="email" formControlName="email">
                
                <button type="submit" class="primary">Apply Now</button>
            </form>
        </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params["id"])
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    })
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }

}
