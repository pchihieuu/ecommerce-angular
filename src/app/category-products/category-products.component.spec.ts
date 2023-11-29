import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductsComponent } from './category-products.component';

describe('CategoryProductsComponent', () => {
  let component: CategoryProductsComponent;
  let fixture: ComponentFixture<CategoryProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryProductsComponent]
    });
    fixture = TestBed.createComponent(CategoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
