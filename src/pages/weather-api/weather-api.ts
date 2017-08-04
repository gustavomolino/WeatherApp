import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForecastPage } from '../forecast/forecast'
import { WeatherPage } from '../weather/weather'

@Component({
  selector: 'page-weather-api',
  templateUrl: 'weather-api.html'
})
export class WeatherApiPage {

  weatherRoot = WeatherPage
  forecastRoot = ForecastPage


  constructor(public navCtrl: NavController) {}

}
