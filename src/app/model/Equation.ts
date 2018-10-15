import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';

export class Equation {
  xValues: number[];
  operation: string;
  result: number;

  constructor() {
    this.xValues = [];
  }
  static newFormGroup(length: number = 2): FormGroup {
    const fg = new FormGroup({
      xValues: new FormArray([], Validators.required),
      operation: new FormControl('<=', Validators.required),
      result: new FormControl(20, Validators.required)
    });

    for (let i = 0; i < length; ++i) {
      (fg.get('xValues') as FormArray).push(
        new FormControl((Math.floor(Math.random() * 10) - 5), Validators.required)
      );
    }
    return fg;
  }
}
