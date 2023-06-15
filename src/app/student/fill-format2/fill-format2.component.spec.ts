import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFormat2Component } from './fill-format2.component';

describe('FillFormat2Component', () => {
  let component: FillFormat2Component;
  let fixture: ComponentFixture<FillFormat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillFormat2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillFormat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
