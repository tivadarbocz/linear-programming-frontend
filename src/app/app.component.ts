import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  numberOfEquations: number[];
  
  constructor(){
    this.numberOfEquations = [];
  }

  removeNewEquations(){
    this.numberOfEquations.splice(-1,1);
  }

  addNewEquations(){
    this.numberOfEquations.push(1);
  }

  clear(){  
    this.numberOfEquations = [];
  }
}
