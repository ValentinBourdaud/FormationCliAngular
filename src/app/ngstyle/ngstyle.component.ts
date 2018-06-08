import { Component, OnInit } from '@angular/core';
import Formation from "../formation/Formation";

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  formations:Array<Formation> = [];

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular', 'la nouveauté, quelle beauté'),
      new Formation('Module JavaScript', 'Le JS, quelle déesse'),
      new Formation('Module TypeScript', 'Le TS, quelle souplesse'),
      ]
  }

}
