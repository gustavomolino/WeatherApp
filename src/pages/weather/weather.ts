import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AppConstantsProvider } from '../../providers/app-constants/app-constants'
import { WeatherApiProvider } from '../../providers/weather-api/weather-api'

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  weatherForm: FormGroup;
  private appConstants: any;
  private Weather: any;
  private geometry: any;
  private currentWeather: any;
  weatherResult: boolean;
  summaryIcon: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder,
              appConstants: AppConstantsProvider,
              weatherApi: WeatherApiProvider
             ) {

    this.weatherForm = fb.group({
      'location': [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-aZ-Z, ]*'),
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
      ]
    });
    this.appConstants = appConstants;
    this.Weather = weatherApi;
    this.geometry = {"longitude": "", "latitude": ""};
    this.currentWeather = {};
    this.weatherResult = false;
    this.summaryIcon = "";

  }


}
