import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExamDetailsComponent } from './view-exam-details.component';

describe('ViewExamDetailsComponent', () => {
  let component: ViewExamDetailsComponent;
  let fixture: ComponentFixture<ViewExamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExamDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
