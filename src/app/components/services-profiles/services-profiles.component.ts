import { Component } from '@angular/core';
import { contractors } from '../models/providers.data';
@Component({
  selector: 'app-services-profiles',
  templateUrl: './services-profiles.component.html',
  styleUrl: './services-profiles.component.scss'
})
export class ServicesProfilesComponent {
  contractors = contractors;


}
