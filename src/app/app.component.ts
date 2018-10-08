import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Equation } from './model/Equation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      equations: this._fb.array([], Validators.required)
    });
    this.addNewEquation();
  }

  removeEquation(index: number) {
    this.equations.removeAt(index);
  }

  addNewEquation() {
    this.equations.push(Equation.newFormGroup());
  }

  clear() {}

  finish() {
    console.log('finish');
    console.log(this.equations.value);
  }

  get equations(): FormArray {
    return this.form.get('equations') as FormArray;
  }

  getXValues(equation: FormGroup): FormArray {
    return equation.get('xValues') as FormArray;
  }
}
