import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditApproverComponent } from './add-edit-approver.component';

describe('AddEditApproverComponent', () => {
  let component: AddEditApproverComponent;
  let fixture: ComponentFixture<AddEditApproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditApproverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
