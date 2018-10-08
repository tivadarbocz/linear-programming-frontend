import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>'
})
export class CreatorComponent {
  numberOfEquations: number;
  
  constructor(){
    this.numberOfEquations = 0
  }
 // title = 'linear-programming-frontend';
 //https://plot.ly/javascript/reference/
 //https://plot.ly/python/3d-filled-line-plots/
 //https://github.com/angular/angular-cli/wiki
 //https://github.com/plotly/angular-plotly.js/blob/master/README.md
  public graph = {
        data: [
           // { x: [1, 2, 3], y: [2, 6, 3], z: [2,5,6], type: 'scatter3d', mode: 'lines+points', marker: {color: 'red'},  fill:"tonexty"}
             { x: [ 1, 2, 3], y: [ 2, 4, 6], type: 'scatter', mode: 'lines+points', marker: {color: 'red'}, name: 'alma'},
            { x: [2, 3, 4], y: [4, 5, 6], type: 'scatter', mode: 'lines+points', marker: {color: 'blue'}}
        ],
        layout: {width: 600, height: 600, title: 'Figure', autosize: false}
    };


    addNewEquations(){
      this.numberOfEquations++;
      //this.graph.data.push( { x: [ 1, 2, 3], y: [ 2, 4, 6], type: 'scatter', mode: 'lines+points', marker: {color: 'red'}, name: 'alma'});
      //console.log(this.graph.data);
    }

    clear(){
      this.numberOfEquations = 0
    }
}
