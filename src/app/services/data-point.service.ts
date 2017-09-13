import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
export class DataPointService {
  videos: Array<any>;

  //MockData
  private _url: string = "http://localhost:4200/assets/data/static-data.json"; 

  //Real Data
  //private _url: string = "real endpoint goes here";

  constructor(private http: Http) {
  }

  getAllVideos() {
    return this.http.get(this._url).map(res => res.json());
  }

  getVideo(id: string) {
    
    return this.http.get(this._url).map(res => (res.json()).filter(videos => videos.response.id === id));

  }
}
