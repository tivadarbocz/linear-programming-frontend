import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTwoDimensionComponent } from './graph-two-dimension.component';

describe('GraphTwoDimensionComponent', () => {
  let component: GraphTwoDimensionComponent;
  let fixture: ComponentFixture<GraphTwoDimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTwoDimensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTwoDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
