import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  mintaSzoveg:string = "Szeretem az Angular pipe-okat.";
  mintaSzam:number = 523.68;
  szazalekErtek:number = 0.52556;
  szazalekErtek2:number = 1.10665;
  valutaErtek:number = 389.78;
  maiDatum:string = new Date().toString();
}
