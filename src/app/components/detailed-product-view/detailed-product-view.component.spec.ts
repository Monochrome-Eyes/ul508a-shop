import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedProductViewComponent } from './detailed-product-view.component';

describe('DetailedProductViewComponent', () => {
  let component: DetailedProductViewComponent;
  let fixture: ComponentFixture<DetailedProductViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedProductViewComponent]
    });
    fixture = TestBed.createComponent(DetailedProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
