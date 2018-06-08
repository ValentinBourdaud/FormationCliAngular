import { Component, OnInit } from '@angular/core';
import Formation from "../formation/Formation";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  formations:Array<Formation> = [];


  handleFormationSelected(formation) {
    alert (`${formation.nom}`)    
}

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular', 'la nouveauté, quelle beauté', 1500,  new Date(2018, 11, 28), new Date(2019, 2, 28)),
      new Formation('Module JavaScript', 'Le JS, quelle déesse', 2000, new Date(2018, 8, 28), new Date(2019, 3, 7) ),
      new Formation('Module TypeScript', 'Le TS, quelle souplesse', 1750, new Date(2018, 10, 28), new Date(2019, 4, 28))
      ]
  }

}
