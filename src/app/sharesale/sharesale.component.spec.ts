import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesaleComponent } from './sharesale.component';

describe('SharesaleComponent', () => {
  let component: SharesaleComponent;
  let fixture: ComponentFixture<SharesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
