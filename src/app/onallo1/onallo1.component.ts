import { Component } from '@angular/core';

@Component({
  selector: 'app-onallo1',
  templateUrl: './onallo1.component.html',
  styleUrl: './onallo1.component.css'
})
export class Onallo1Component {

a:Auto = {
    rendszam: "DLD",
    gyarto: "BMW",
    tipus: "x5",
    hengerurtartalom: 500,
};

//Autók tömb
autok:Auto[] = [
  {
    rendszam: "BHG",
    gyarto: "opel",
    tipus: "astra",
    hengerurtartalom: 320,
  },
  {
    rendszam: "JPF",
    gyarto: "Suzuki",
    tipus: "swift",
    hengerurtartalom: 250,
  },
  {
    rendszam: "RAT",
    gyarto: "Peugeot",
    tipus: "207",
    hengerurtartalom: 410,
  },

];

}

//Interface

export interface Auto{
    rendszam:string,
    gyarto:string,
    tipus:string,
    hengerurtartalom:number,
  }

