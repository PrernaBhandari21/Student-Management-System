import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAvailableExamsComponent } from './all-available-exams.component';

describe('AllAvailableExamsComponent', () => {
  let component: AllAvailableExamsComponent;
  let fixture: ComponentFixture<AllAvailableExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAvailableExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAvailableExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
