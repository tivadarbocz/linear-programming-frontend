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
  _data: Plotly.Data[];
  @Input('data')
  set data(data: Equation[]) {
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

  calculateGraphData(equations: Equation[]) {
    this._data = [];
    let i = 0;
    equations.forEach(e => {
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
        marker: { color: this.getRandomColor()  },
        name: 'trace' + i
      });
    });

    this.layout = { width: 600, height: 600, title: 'Figure', autosize: false };
  }

   getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
