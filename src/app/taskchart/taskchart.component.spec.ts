import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskchartComponent } from './taskchart.component';

describe('TaskchartComponent', () => {
  let component: TaskchartComponent;
  let fixture: ComponentFixture<TaskchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskchartComponent]
    });
    fixture = TestBed.createComponent(TaskchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
