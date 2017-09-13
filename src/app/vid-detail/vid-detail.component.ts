import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-vid-detail',
  templateUrl: './vid-detail.component.html',
  styleUrls: ['./vid-detail.component.css']
})
export class VidDetailComponent implements OnInit {
  @Input() vidItem: Array<any>;
  constructor() { }

  ngOnInit() {

  }

}
