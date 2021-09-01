import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EButtonType } from 'src/app/data-types/button.enum';

import { TestButtonComponent } from './test-button.component';

describe('TestButtonComponent', () => {
  let component: TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.componentInstance;
    component.buttonType = EButtonType.Primary;
    component.buttonText = 'Click';
    component.action = new EventEmitter();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render btn text if btn type is primary', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-text')).toBeTruthy();
  });

  it('should receive output', () => {
    expect(component.action).toBeTruthy();
  });
});
