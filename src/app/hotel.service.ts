import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelService {

  constructor(private http: Http) {}

  /**
   * To return Observable (stream of data) on http get request
   */
  getHotels(): Observable<any> {
    return this.http
      .get(`http://my-json-server.typicode.com/gurudu/hotels/hotels/`)
      .map((res: any) => res.json());
  }
}
