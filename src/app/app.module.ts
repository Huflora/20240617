import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UjKomponensComponent } from './uj-komponens/uj-komponens.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ErrorComponent } from './error/error.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { OsszetettAdatComponent } from './osszetett-adat/osszetett-adat.component';
import { Onallo1Component } from './onallo1/onallo1.component';
import { Onallo2Component } from './onallo2/onallo2.component';
import { Onallo3Component } from './onallo3/onallo3.component';
import { PipeComponent } from './pipe/pipe.component';
import { Onallo4Component } from './onallo4/onallo4.component';

@NgModule({
  declarations: [
    AppComponent,
    UjKomponensComponent,
    FooldalComponent,
    RolunkComponent,
    ErrorComponent,
    DataBindingComponent,
    OsszetettAdatComponent,
    Onallo1Component,
    Onallo2Component,
    Onallo3Component,
    PipeComponent,
    Onallo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Two way bindinghoz kell!
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
