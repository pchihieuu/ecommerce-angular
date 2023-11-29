import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendProductComponent } from './recommend-product.component';

describe('RecommendProductComponent', () => {
  let component: RecommendProductComponent;
  let fixture: ComponentFixture<RecommendProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendProductComponent]
    });
    fixture = TestBed.createComponent(RecommendProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
