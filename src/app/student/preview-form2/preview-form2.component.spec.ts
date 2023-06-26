import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewForm2Component } from './preview-form2.component';

describe('PreviewForm2Component', () => {
  let component: PreviewForm2Component;
  let fixture: ComponentFixture<PreviewForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
