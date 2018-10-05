import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, PlotlyModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
