import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProductFavListComponent } from './test-product-fav-list.component';

describe('TestProductFavListComponent', () => {
  let component: TestProductFavListComponent;
  let fixture: ComponentFixture<TestProductFavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestProductFavListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProductFavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
