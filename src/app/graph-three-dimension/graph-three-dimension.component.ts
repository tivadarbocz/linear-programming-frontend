import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Equation } from '../model/Equation';
import { CreatorComponent } from '../creator/creator.component';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-graph-three-dimension',
  templateUrl: './graph-three-dimension.component.html',
  styleUrls: ['./graph-three-dimension.component.css']
})
export class GraphThreeDimensionComponent implements OnInit {

  form: FormGroup;

  @ViewChild(CreatorComponent)
  creator;

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
    this.equations.push(Equation.newFormGroup(3));
  }

  clear() {}

  onSubmit() {
    this.creator.data = this.equations.value;
  }

  get equations(): FormArray {
    return this.form.get('equations') as FormArray;
  }

  getXValues(equation: FormGroup): FormArray {
    return equation.get('xValues') as FormArray;
  }
}
