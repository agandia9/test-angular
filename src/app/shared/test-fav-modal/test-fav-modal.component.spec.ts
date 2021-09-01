import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
    ];
    fixture.detectChanges();
  });

  it('if products are added in favlist, should render the list', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-test-product-fav-list')).not.toBe(null);
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TestFavModalComponent);
  //   component = fixture.componentInstance;
  //   component._favList = [];
  //   fixture.detectChanges();
  // });
  // it('if products are added in favlist, should render the list', () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.debugElement.query(By.css('.addItem'))).toBe(null);
  // });
});
