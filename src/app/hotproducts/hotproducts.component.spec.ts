import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotproductsComponent } from './hotproducts.component';

describe('HotproductsComponent', () => {
  let component: HotproductsComponent;
  let fixture: ComponentFixture<HotproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotproductsComponent]
    });
    fixture = TestBed.createComponent(HotproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
