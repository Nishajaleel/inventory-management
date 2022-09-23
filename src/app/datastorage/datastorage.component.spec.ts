import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastorageComponent } from './datastorage.component';

describe('DatastorageComponent', () => {
  let component: DatastorageComponent;
  let fixture: ComponentFixture<DatastorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatastorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatastorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
