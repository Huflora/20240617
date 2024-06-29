import { Component } from '@angular/core';

@Component({
  selector: 'app-onallo3',
  templateUrl: './onallo3.component.html',
  styleUrl: './onallo3.component.css'
})
export class Onallo3Component {
  dolgozok:Dolgozo[] = [];
  nevV:string = "";
  korV:number = 0;
  aktivV:boolean = true;

  Felvitel():void{
    var d:Dolgozo = {
      nev: this.nevV,
      kor: this.korV,
      aktiv: this.aktivV,
    };

    this.dolgozok.push(d);

    //Űrlap alaphelyzetbe állítása
    this.nevV = "";
    this.korV = 0;
    this.aktivV = true;
  };
}

//Interface

export interface Dolgozo{
  nev:string;
  kor:number;
  aktiv:boolean;
}