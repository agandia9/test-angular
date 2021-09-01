import { CommonModule, CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { favReducer } from '../../../app/store/fav.reducer';
import { TestProductCardComponent } from './test-product-card.component';

describe('TestProductCardComponent', () => {
  let component: TestProductCardComponent;
  let fixture: ComponentFixture<TestProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ favList: favReducer })],
      declarations: [TestProductCardComponent],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TestProductCardComponent);
    component = fixture.componentInstance;
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

  it('should receive product property', () => {
    expect(component.product).toBeDefined();
  });
});
