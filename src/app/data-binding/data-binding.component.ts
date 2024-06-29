import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //Interpoláció
  //Angular (TS) class-ban nem kell a var jelölő
  interpolacio:string = "Egyszeru adatkotes / beszuras (interpolacio)";

  //Property binding (tulajdonság)
  utvonal:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOFmjGchTMwQriXqezOovYKqXWK3YXUnFlQ&s";
  alternativ:string = "Angular";
  cim:string = "Angular";
  szelesseg:number = 300;

  //Event binding (esemény)
  uzenet():void{
    alert("Ez egy event handler uzenet.");
  }

  //Two way bindig - kétirányú adatkötés >>FORMSMODULE az app.module.ts-be!
  aOldalValtozo:number = 1;



}
