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
      operation: new FormControl('', Validators.required),
      result: new FormControl(0, Validators.required)
    });
    //Array.from({length: length}, () =>);
    for (let i = 0; i < length; ++i) {
      (fg.get('xValues') as FormArray).push(
        new FormControl(10, Validators.required)
      );
    }
    return fg;
  }
}
