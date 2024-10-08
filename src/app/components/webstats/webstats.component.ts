import { Component } from '@angular/core';

@Component({
  selector: 'app-webstats',
  templateUrl: './webstats.component.html',
  styleUrl: './webstats.component.scss'
})
export class WebstatsComponent {

  visits : Number = Number(localStorage.getItem('visit'));
  users : Number = 10000;
  business : Number = 400;
  testemony : Number = 30;
  host = location.hostname;
}
