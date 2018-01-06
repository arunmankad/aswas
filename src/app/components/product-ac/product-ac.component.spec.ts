import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductACComponent } from './product-ac.component';

describe('ProductACComponent', () => {
  let component: ProductACComponent;
  let fixture: ComponentFixture<ProductACComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductACComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
