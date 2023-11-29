import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveFormComponent } from './directive-form.component';

describe('DirectiveFormComponent', () => {
  let component: DirectiveFormComponent;
  let fixture: ComponentFixture<DirectiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveFormComponent]
    });
    fixture = TestBed.createComponent(DirectiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
