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
    if (data[0].xValues.length === 2) {
      this.calculate2DGraphData(data);
    } else if (data[0].xValues.length === 3) {
      this.calculate3DGraphData(data);
    }
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

      if (
        (e.xValues[0] > 0 && e.xValues[1] > 0) ||
        (e.xValues[0] < 0 && e.xValues[1] < 0)
      ) {
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
        const py2 =
          e.result / e.xValues[1] + l * Math.abs(e.result / e.xValues[1]);

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
        const px1 =
          e.result / e.xValues[0] + l * Math.abs(e.result / e.xValues[0]);
        const px2 = l * Math.abs(py2);

        xPoints.push(px1);
        yPoints.push(px2);
        xPoints.push(py1);
        yPoints.push(py2);
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
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  calculate3DGraphData(equations: Equation[]) {
    this._data = [];
    this._data.push({
      type: 'mesh3d',
      x: [0, 1, 2, 0],
      y: [0, 0, 1, 2],
      z: [0, 2, 0, 1],
      i: [0, 0, 0, 1],
      j: [1, 2, 3, 2],
      k: [2, 3, 1, 3],
      intensity: [0, 0.33, 0.66, 1],
      colorscale: [
        [0, 'rgb(255, 0, 0)'],
        [0.5, 'rgb(0, 255, 0)'],
        [1, 'rgb(0, 0, 255)']
      ]
    });
  }
}
