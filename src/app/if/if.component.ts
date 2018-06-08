import { Component, OnInit } from '@angular/core';
import Formation  from "../formation/Formation";

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  isHidden:boolean;
  
  formation:Formation = new Formation("JAVA", "C'est la folie!");

  handleClick() {
    this.isHidden = !this.isHidden;
  }

  constructor() { }

  ngOnInit() {
  }

}
