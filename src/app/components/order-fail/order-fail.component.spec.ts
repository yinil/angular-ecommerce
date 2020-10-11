import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFailComponent } from './order-fail.component';

describe('OrderFailComponent', () => {
  let component: OrderFailComponent;
  let fixture: ComponentFixture<OrderFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
