import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarByIdComponent } from './car-by-id.component';

describe('CarByIdComponent', () => {
  let component: CarByIdComponent;
  let fixture: ComponentFixture<CarByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
