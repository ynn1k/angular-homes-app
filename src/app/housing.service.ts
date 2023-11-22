import { Injectable } from '@angular/core';
import {HousingLocation} from "./housing-location";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [];
  url = "http://localhost:3000/locations"
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url); //TODO: use Angular HttpClient (?)
    return await data.json() ?? []
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`); //TODO: use Angular HttpClient (?)
    return await data.json() ?? {}
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    alert(`Applied as: ${firstName} ${lastName}, ${email}`)
  }
}
