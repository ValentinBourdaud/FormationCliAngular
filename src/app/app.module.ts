import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { BindingComponent } from './binding/binding.component';
import { EvenementComponent } from './evenement/evenement.component';
import { VaribaleComponent } from './varibale/varibale.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormationItemComponent } from './formation-item/formation-item.component';
import { PlaygroundComponent } from './playground/playground.component';
import { FormationItemOutputComponent } from './formation-item-output/formation-item-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    BindingComponent,
    EvenementComponent,
    VaribaleComponent,
    IfComponent,
    ForComponent,
    NgstyleComponent,
    PipesComponent,
    FormationItemComponent,
    PlaygroundComponent,
    FormationItemOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
