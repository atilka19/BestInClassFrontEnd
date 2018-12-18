import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewByIdComponent } from './review-by-id.component';

describe('ReviewByIdComponent', () => {
  let component: ReviewByIdComponent;
  let fixture: ComponentFixture<ReviewByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
