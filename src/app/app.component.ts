import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HotelService } from './hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hotels: any;
  title = 'Space One Hotels';
  constructor(private hotelService: HotelService) {  }

  ngOnInit() {
    this.getHotels();
  }

  /**
   * To get the array of hotels by subscribing to the Observable from HotelService
   */
  getHotels(): void {
    this.hotelService.getHotels()
    .subscribe(hotels => this.hotels = hotels);
  }

}
