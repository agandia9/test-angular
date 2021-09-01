import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSearchBarComponent } from './test-search-bar.component';

describe('TestSearchBarComponent', () => {
  let component: TestSearchBarComponent;
  let fixture: ComponentFixture<TestSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TestSearchBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('criteria search elements should be length === 4', () => {
    expect(component.searchCriteria.length).toEqual(4);
  });
});
