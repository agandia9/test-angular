import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { favReducer } from '../../../app/store/fav.reducer';

import { TestProductFavListComponent } from './test-product-fav-list.component';

describe('TestProductFavListComponent', () => {
  let component: TestProductFavListComponent;
  let fixture: ComponentFixture<TestProductFavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ favList: favReducer })],
      declarations: [TestProductFavListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestProductFavListComponent);
    component = fixture.componentInstance;
    component.isLastProduct = false;
    component.product = {
      id: 1,
      email: 'example@example',
      description: 'Lorem ipsum dolor sit amet',
      image: '',
      title: 'Test',
      price: '10',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive isLastProduct property', () => {
    expect(component.isLastProduct).toBeDefined();
  });
  it('should receive product property', () => {
    expect(component.product).toBeDefined();
  });
});
