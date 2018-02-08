import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  constructor() { }
  @Input() hotels: any;
  lat =  47.39834920035926;
  lng =  13.0517578125;
  zoom = 7;
  city = '';
  weather = '';
  imgSrc = '';
  imgAlt = '';
  found: boolean;
  cityHotels = [];
  error: boolean;
  /**
   * To set city value to the value in input field
   */
  onNameKeyUp( event: any ) {
    this.city = event.target.value;
    this.city = this.city[0].toUpperCase() + this.city.slice(1).toLowerCase();
  }

  /**
   *  To get hotels by city name
   */
  getCityHotels() {
    if (this.hotels.find(i => i.city === this.city) !== undefined) {
       this.cityHotels = this.hotels.filter(obj => obj.city === this.city);
       this.error = false;
    } else {
      this.error = true;
    }
}
  /**
  * To set different images based on the weather of the hotel
  */
  hotelWeather(weather: string) {
  console.log(weather);
  switch (true) {
  case weather.includes('clouds'):
    this.weather = 'clouds';
    this.imgSrc = 'assets/images/clouds.png';
    this.imgAlt = 'clouds';
    break;
  case weather.includes('clear'):
    this.weather = 'clear';
    this.imgSrc = 'assets//images/clear.jpg';
    this.imgAlt = 'clear';
    break;
  case weather.includes('rain'):
    this.weather = 'rain';
    this.imgSrc = 'assets//images/rain.png';
    this.imgAlt = 'rain';
    break;
  }
  }

}
