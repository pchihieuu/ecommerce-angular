import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductsComponent]
    });
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
