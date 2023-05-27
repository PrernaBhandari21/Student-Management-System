import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExistingExamComponent } from './update-existing-exam.component';

describe('UpdateExistingExamComponent', () => {
  let component: UpdateExistingExamComponent;
  let fixture: ComponentFixture<UpdateExistingExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExistingExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExistingExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
