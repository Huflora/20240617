import { Component } from '@angular/core';

@Component({
  selector: 'app-osszetett-adat',
  templateUrl: './osszetett-adat.component.html',
  styleUrl: './osszetett-adat.component.css'
})
export class OsszetettAdatComponent {
  //Tömbök
  bevasarlolista:string[] = ["alma", "banán", "barack", "szilva"];
  szamok:number[] = [3, 13, 21, 42, 69, 11, 21];

  //Objektum interface-el
  d:Dolgozo = {
    nev: "Kiss Lajos",
    kor: 22,
    beosztas: "portás",
  };

  //Objektum tömb
  dolgozok:Dolgozo[] = [
    {
    nev: "Nagy Lajos",
    kor: 22,
    beosztas: "ertekesíto",
    },
    {
      nev: "BG Réka",
      kor: 51,
      beosztas: "webdev",
      },

  ];

}

//Interface
export interface Dolgozo{
  nev:string;
  kor:number;
  beosztas:string;
}