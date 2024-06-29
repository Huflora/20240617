import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UjKomponensComponent } from './uj-komponens/uj-komponens.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ErrorComponent } from './error/error.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { OsszetettAdatComponent } from './osszetett-adat/osszetett-adat.component';
import { Onallo1Component } from './onallo1/onallo1.component';
import { Onallo2Component } from './onallo2/onallo2.component';
import { Onallo3Component } from './onallo3/onallo3.component';
import { PipeComponent } from './pipe/pipe.component';
import { Onallo4Component } from './onallo4/onallo4.component';

//route objektumokat kell felvenni!
const routes: Routes = [
  //Fix route-ok
  {path: "ujkomponens", component:UjKomponensComponent},
  {path: "fooldal", component:FooldalComponent},
  {path: "rolunk", component:RolunkComponent},
  {path: "databinding", component:DataBindingComponent},
  {path: "osszetettAdat", component:OsszetettAdatComponent},
  {path: "onallo1", component:Onallo1Component},
  {path: "onallo2", component:Onallo2Component},
  {path: "onallo3", component:Onallo3Component},
  {path: "pipe", component:PipeComponent},
  {path: "onallo4", component:Onallo4Component},

  //Alapértelmezett route - ha nem adunk meg semmit
  {path: "", redirectTo: "/fooldal", pathMatch: "full"},

  //Minden más eset (hibás útvonal)
  {path: "**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
