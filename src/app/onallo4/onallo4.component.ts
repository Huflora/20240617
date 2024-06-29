import { Component } from '@angular/core';

@Component({
  selector: 'app-onallo4',
  templateUrl: './onallo4.component.html',
  styleUrl: './onallo4.component.css'
})
export class Onallo4Component {
  karorak:Karora[] = [];

  referenciaszam: string = "";
  gyarto: string = "";
  tipus: string = "";
  anyag: Anyag = Anyag.acel;
  szerkezet: boolean = true;
  ar: number = 0;
  gyartasiIdo: Date = new Date();

  felvitel():void{
    var valodiAnyag: Anyag = Anyag.acel;

    switch(this.anyag.toString()){
      case "acel":
        valodiAnyag = Anyag.acel;
        break;

        case "titan":
          valodiAnyag = Anyag.titan;
        break;

        case "keramia":
          valodiAnyag = Anyag.keramia;
        break;

        case "kaucsuk":
          valodiAnyag = Anyag.kaucsuk;
        break;
    }

    var k:Karora = {
      referenciaszam: this.referenciaszam,
      gyarto: this.gyarto,
      tipus: this.tipus,
      anyag: valodiAnyag,
      szerkezet: this.szerkezet,
      ar: this.ar,
      gyartasiIdo: this.gyartasiIdo,
    };

    this.karorak.push();

    this.referenciaszam = "";
    this.gyarto = "";
    this.tipus = "";
    this.anyag = Anyag.acel;
    this.szerkezet = true;
    this.ar = 0;
    this.gyartasiIdo = new Date();

    //console.log(this.karorak);
  }

}

export interface Karora{
  referenciaszam: string;
  gyarto: string;
  tipus: string;
  anyag: Anyag;
  szerkezet: boolean;
  ar: number;
  gyartasiIdo: Date;
}

export enum Anyag{
  acel, titan, keramia, kaucsuk
}
