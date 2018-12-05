import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsByIdComponent } from './news-by-id.component';

describe('NewsByIdComponent', () => {
  let component: NewsByIdComponent;
  let fixture: ComponentFixture<NewsByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
