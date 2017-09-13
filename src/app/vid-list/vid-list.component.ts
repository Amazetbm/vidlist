import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DataPointService } from "../services/data-point.service";
@Component({
  selector: 'app-vid-list',
  templateUrl: './vid-list.component.html',
  styleUrls: ['./vid-list.component.css'],
  providers: [DataPointService]
})
export class VidListComponent implements OnInit {
  @Input() vidItem;
  @Output() vidWasSelected = new EventEmitter<any>();

  allVideos;
  videoItems;
  specItems;

  constructor(private _dataPointService: DataPointService) { }

  ngOnInit() {
   this._dataPointService.getAllVideos()
     .subscribe(
       (res) => {
         this.allVideos = res;
         this.videoItems = this.allVideos.response;
         this.specItems = this.videoItems.products.specs;
       },
       (error) => console.log("error : " + error)
     );
  }

  public onVidSelected(videoItems) {
    this.vidWasSelected.emit(videoItems);
  }

}
