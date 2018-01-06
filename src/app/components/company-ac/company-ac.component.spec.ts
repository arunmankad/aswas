import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyACComponent } from './company-ac.component';

describe('CompanyACComponent', () => {
  let component: CompanyACComponent;
  let fixture: ComponentFixture<CompanyACComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyACComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
