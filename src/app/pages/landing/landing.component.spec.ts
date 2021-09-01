import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { TestProductCardComponent } from '../../shared/test-product-card/test-product-card.component';
import { HeaderComponent } from '../header/header.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LandingComponent } from './landing.component';
import { StoreModule } from '@ngrx/store';
import { favReducer } from '../../../app/store/fav.reducer';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({ favList: favReducer }),
      ],
      declarations: [LandingComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should render header', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBe(null);
  });
  it('if not products should not render', () => {
    component.copyFilteredItems$ = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-test-product-card')).toBe(null);
  });
});
