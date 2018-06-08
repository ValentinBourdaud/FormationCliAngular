import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  textStatique:string = "red";

  constructor() { }

  ngOnInit() {
    setInterval(() =>{
      if (this.textStatique == "red"){
        this.textStatique = "green"
      }
      else this.textStatique = "red"
      }, 1000)
      }
  }


