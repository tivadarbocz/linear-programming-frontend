import { Component, OnInit, Input } from '@angular/core';
import { Equation } from '../model/Equation';
import { Plotly } from 'angular-plotly.js/src/app/plotly/plotly.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
  exportAs: 'CreatorComponent'
})
export class CreatorComponent {
  numberOfEquations = 0;
  _data: Plotly.Data[];
  color = ['red', 'blue', 'green', 'yellow', 'purple', 'black'];
  @Input('data')
  set data(data: Equation[]) {
    //TODO
    this.calculateGraphData(data);
  }
  get data(): Equation[] {
    return null;
  }
  layout = { width: 600, height: 600, title: 'Figure', autosize: false };

  constructor() {}
  //https://plot.ly/javascript/reference/
  //https://plot.ly/python/3d-filled-line-plots/
  //https://github.com/angular/angular-cli/wiki
  //https://github.com/plotly/angular-plotly.js/blob/master/README.md

  addNewEquations() {
    this.numberOfEquations++;
    // this.graph.data.push( { x: [ 1, 2, 3], y: [ 2, 4, 6], type: 'scatter', mode: 'lines+points', marker: {color: 'red'}, name: 'alma'});
    // console.log(this.graph.data);
  }

  clear() {
    this.numberOfEquations = 0;
  }

  calculateGraphData(equations: Equation[]) {
    this.equationToPlotlyData(equations);
    this.layout = { width: 600, height: 600, title: 'Figure', autosize: false };
  }

  equationToPlotlyData(equations: Equation[]) {
    this._data = [];
    let i = 0;
    equations.forEach(e => {
      //e.xValues.forEach(x => {

      const xPoints = [];
      const yPoints = [];
      const p1 = e.result / e.xValues[0];
      const p2 = 0;
      const p3 = 0;
      const p4 = e.result / e.xValues[1];

      xPoints.push(p1);
      yPoints.push(p2);
      xPoints.push(p3);
      yPoints.push(p4);
      ++i;

      this._data.push({
        x: xPoints,
        y: yPoints,
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: this.color[i] },
        name: 'trace' + i
      });
      //});
    });

    /*this._data = [
      {
        x: xPoints,
        y: yPoints,
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: 'red' },
        name: 'trace'
      }
    ];*/

    console.log('_data', this._data);
  }
}
