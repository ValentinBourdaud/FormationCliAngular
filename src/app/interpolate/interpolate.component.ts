import { Component, OnInit } from '@angular/core';
import Formation  from "../formation/Formation";

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  prenom:string='Valentin';
  nom:string='Bourdaud';

  formation:Formation = new Formation("Angular", "super");

  formationJS:Formation;

  getFullName() :string {
    return `${this.nom}  ${this.prenom}`
    }

  constructor() { 

  }

  ngOnInit() {

    setTimeout(() => {
      this.formationJS= new Formation('Module JavaScript', "Super");
      }, 3000)
      }
  }


