import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrowaveovenComponent } from './microwaveoven.component';

describe('MicrowaveovenComponent', () => {
  let component: MicrowaveovenComponent;
  let fixture: ComponentFixture<MicrowaveovenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrowaveovenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrowaveovenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
