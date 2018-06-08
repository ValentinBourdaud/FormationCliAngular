import { Component, OnInit } from '@angular/core';
import Formation  from "../formation/Formation";


@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  formations:Array<Formation> = [];
  
  constructor() { }

  getColorByElement(isFirst:boolean = false, isLast:boolean=false) {
    if(isFirst ==true){
      return "red";
    }
    else if(isLast ==true){
      return "green";
    }
    else{
      return "black";
    }
    }
  getBgColorByElement(isEven:boolean = false) {
    if(isEven ==true){
      return "silver";
    }
    else{
      return "white";
    }
  }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular', 'la nouveauté, quelle beauté'),
      new Formation('Module JavaScript', 'Le JS, quelle déesse'),
      new Formation('Module TypeScript', 'Le TS, quelle souplesse'),
      ]
  }


}
