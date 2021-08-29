import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EButtonType } from '../../../app/data-types/button.enum';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.sass'],
})
export class TestButtonComponent implements OnInit {
  @Input('buttonText') buttonText: string = '';
  @Input('buttonType') buttonType: EButtonType = EButtonType.Primary;
  @Output('action') action = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public onClick(e) {
    this.action.emit(e);
  }
}
