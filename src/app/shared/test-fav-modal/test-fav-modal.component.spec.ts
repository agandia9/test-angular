import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFavModalComponent } from './test-fav-modal.component';

describe('TestFavModalComponent', () => {
  let component: TestFavModalComponent;
  let fixture: ComponentFixture<TestFavModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFavModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
