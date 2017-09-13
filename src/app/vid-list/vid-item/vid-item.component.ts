import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-vid-item',
  templateUrl: './vid-item.component.html',
  styleUrls: ['./vid-item.component.css']
})
export class VidItemComponent implements OnInit {
  @Input() vidItem: Array<any>;
  @Output() videoSelected = new EventEmitter<any>();

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    let localId = this.vidItem;
    this.videoSelected.emit(localId);
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  onSelected() {
    let localId = this.vidItem;
    console.log(localId);
    this.videoSelected.emit(localId);
  }

}
