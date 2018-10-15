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
    this.calculate2DGraphData(data);
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

  calculate2DGraphData(equations: Equation[]) {
    this._data = [];
    let i = 0;
    equations.forEach(e => {
      const xPoints = [];
      const yPoints = [];

      if ((e.xValues[0] > 0 && e.xValues[1] > 0) || (e.xValues[0] < 0 && e.xValues[1] < 0)) {
        const l = 0;
        const k = 0;
        const px1 = (e.result - l * e.xValues[1]) / e.xValues[0];
        const px2 = 0;
        const py1 = 0;
        const py2 = (e.result - k * e.xValues[0]) / e.xValues[1];

        xPoints.push(px1);
        yPoints.push(px2);
        xPoints.push(py1);
        yPoints.push(py2);
      } else if (e.xValues[0] < 0) {
        //ha x1 kisebb, mint 0
        const l = 2;

        //beginning point
        const px1 = e.result / e.xValues[0];
        const px2 = 0;

        //end point
        const py1 = l * Math.abs(px1);
        const py2 = e.result / e.xValues[1] + l * Math.abs(e.result / e.xValues[1]);

        xPoints.push(px1);
        yPoints.push(px2);
        xPoints.push(py1);
        yPoints.push(py2);
      } else if (e.xValues[1] < 0) {
        //ha x2 kisebb, mint 0
        //const l = 10 * e.xValues[1];
        const l = 2;
        //beginning point
        const py1 = 0;
        const py2 = e.result / e.xValues[1];

        //end point
        const px1 = e.result / e.xValues[0] + l * Math.abs(e.result / e.xValues[0]);
        const px2 = l * Math.abs(py2);

        xPoints.push(px1);
        yPoints.push(px2);
        xPoints.push(py1);
        yPoints.push(py2);
        /*console.log('px1', px1);
        console.log('px2', px2);
        console.log('py1', py1);
        console.log('py2', py2);*/
      }

      ++i;

      this._data.push({
        x: xPoints,
        y: yPoints,
        type: 'scatter',
        mode: 'lines+points',
        marker: { color: this.getRandomColor() },
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
