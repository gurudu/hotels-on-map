import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import {HttpModule} from '@angular/http';
import { HotelService } from './hotel.service';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtEb671A8SWpBZXEaFwdrF4SorCvONijg'
    })
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
