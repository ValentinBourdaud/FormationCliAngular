import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  isHidden:boolean;

  handleClick() {
    this.isHidden = !this.isHidden;
  }

  mouseOver():void{
    console.log("Je suis le texte de mouseOver");
  }

  mouseOut():void{
  console.log("Je suis le texte de mouseOut");
  }

  constructor() { 

  }

  ngOnInit() {

  }

}
