import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

ngOnInit(): void {

  // testing the webvisit count
    var currentVist:any = localStorage.getItem("visit");
    var newvisit : number = parseInt(currentVist) + 1;
    var newnewVi : string = String(newvisit);
    localStorage.setItem('visit', newnewVi )

    console.log(newnewVi);
   
    
    
}

}
