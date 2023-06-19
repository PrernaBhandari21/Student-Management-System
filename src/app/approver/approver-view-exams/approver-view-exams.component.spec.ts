import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverViewExamsComponent } from './approver-view-exams.component';

describe('ApproverViewExamsComponent', () => {
  let component: ApproverViewExamsComponent;
  let fixture: ComponentFixture<ApproverViewExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproverViewExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproverViewExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
