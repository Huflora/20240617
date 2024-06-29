import { Component } from '@angular/core';

@Component({
  selector: 'app-onallo2',
  templateUrl: './onallo2.component.html',
  styleUrl: './onallo2.component.css'
})
export class Onallo2Component {
  nevek:string[] = [];
  nevValtozo:string = "";

  Felvitel():void{
    this.nevek.push(this.nevValtozo);
    this.nevValtozo = "";
  }
}

