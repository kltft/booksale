import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindsaleComponent } from './findsale.component';

describe('FindsaleComponent', () => {
  let component: FindsaleComponent;
  let fixture: ComponentFixture<FindsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
