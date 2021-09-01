import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../app/services/modal-service.service';
import { EButtonType } from '../../../app/data-types/button.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public EButtonType = EButtonType;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}
  public openFavModal() {
    this.modalService.open();
  }
}
