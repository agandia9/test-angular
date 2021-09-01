import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { favReducer } from '../../../app/store/fav.reducer';

import { TestFavModalComponent } from './test-fav-modal.component';

describe('TestFavModalComponent', () => {
  let component: TestFavModalComponent;
  let fixture: ComponentFixture<TestFavModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ favList: favReducer })],
      declarations: [TestFavModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFavModalComponent);
    component = fixture.componentInstance;
    component._favList = [
      {
        id: 1,
        email: 'example@example',
        description: 'Lorem ipsum dolor sit amet',
        image: '',
        title: 'Test',
        price: '10',
      },
      {
        id: 2,
        email: 'example2@example',
        description: 'Lorem ipsum dolor sit',
        image: '',
        title: 'Test2',
        price: '20',
      },
    ];
    fixture.detectChanges();
  });

  it('if products are added in favlist, should render the list', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelectorAll('app-test-product-fav-list').length
    ).toEqual(component._favList.length);
  });

  // if favlist is null, should render fav-empty"
  it('if favlist is null, should render fav-empty"', () => {
    component._favList = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.fav-empty')).toBeDefined();
  });
});
