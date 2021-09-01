import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EButtonType } from '../../../app/data-types/button.enum';
import { ModalService } from '../../../app/services/modal-service.service';

@Component({
  selector: 'app-test-fav-modal',
  templateUrl: './test-fav-modal.component.html',
  styleUrls: ['./test-fav-modal.component.sass'],
})
export class TestFavModalComponent implements OnInit {
  public EButtonType = EButtonType;
  isDisplayModal: Observable<string>;
  favList$;
  _favList;
  constructor(
    private modalService: ModalService,
    private store: Store<{ favList: number }>
  ) {
    this.favList$ = this.store.select('favList').subscribe((s) => {
      this._favList = s;
    });
  }

  ngOnInit() {
    this.isDisplayModal = this.modalService.watch();
  }
  close() {
    this.modalService.close();
  }
}
