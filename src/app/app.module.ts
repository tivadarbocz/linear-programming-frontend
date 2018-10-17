import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphTwoDimensionComponent } from './graph-two-dimension/graph-two-dimension.component';
import { GraphThreeDimensionComponent } from './graph-three-dimension/graph-three-dimension.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    GraphTwoDimensionComponent,
    GraphThreeDimensionComponent
  ],
  imports: [
    BrowserModule, PlotlyModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
