import { Component } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  

  nav:Boolean = false;

  openClose()
  {

  this.nav =! this.nav
      
  console.log(this.nav);
      
  }

  }
