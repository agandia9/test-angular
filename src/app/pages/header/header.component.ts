import { Component, OnInit } from '@angular/core';
import { EButtonType } from '../../../app/data-types/button.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public EButtonType = EButtonType;
  constructor() {}

  ngOnInit(): void {}
}
