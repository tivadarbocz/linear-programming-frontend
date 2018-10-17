import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphThreeDimensionComponent } from './graph-three-dimension.component';

describe('GraphThreeDimensionComponent', () => {
  let component: GraphThreeDimensionComponent;
  let fixture: ComponentFixture<GraphThreeDimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphThreeDimensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphThreeDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
