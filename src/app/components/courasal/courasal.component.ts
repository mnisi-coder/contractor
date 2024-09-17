import { Component,Input ,OnInit } from '@angular/core';

interface CouresalImage{
  imageSrc : string;
  imageAlt : string;
}

@Component({
  selector: 'app-courasal',
  templateUrl: './courasal.component.html',
  styleUrl: './courasal.component.scss'
})
export class CourasalComponent implements OnInit  {

@Input() images: CouresalImage[] = []
@Input() indicators = true 
@Input() controls = true 
@Input() autoSlide = false 
@Input() slideInterval = 5000; //default to 5 seconds
selectedIndex = 0;

ngOnInit(): void {
  if(this.autoSlide){
    this.autoSlideImages();
  }
}

// changes images in every 3 second
autoSlideImages():void{
  setInterval(() =>{
  this.OnNextClick();
  },this.slideInterval)
}

//sets index of images on dot/indicator click
selectImage(index: number):void{
   this.selectedIndex = index;
}

OnPrevClick():void{
  if(this.selectedIndex === 0){
    this.selectedIndex =this.images.length -1 ;
  }else{
    this.selectedIndex--;
  }
}
OnNextClick():void{
  if(this.selectedIndex === this.images.length - 1){
    this.selectedIndex = 0
  }else{
    this.selectedIndex++;
  }
}
}
