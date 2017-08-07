import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AppConstantsProvider } from '../../providers/app-constants/app-constants'
import { WeatherApiProvider } from '../../providers/weather-api/weather-api'

@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {

  forecastForm: FormGroup;
  private appConstants: any;
  private Weather: any;
  private geometry: any;
  private mimWeather: number[][];
  private maxWeather: number[][];
  private weatherTime: any;
  weatherResult: boolean;
  summaryIcon: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder,
              appConstants: AppConstantsProvider,
              weatherApi: WeatherApiProvider
              ) {
    this.forecastForm = fb.group({
      'location': [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-aZ-Z, ]*'),
          Validators.minLength(3),
          Validators.maxLength(100)
        ])],
      'forecastType': 'daily'
    });
    this.appConstants = appConstants
    this.Weather = weatherApi,
    this.geometry = {"longitude": "", "latitude": ""};
    this.mimWeather = new Array();
    this.maxWeather = new Array();
    this.weatherTime = new Array();
    this.weatherResult = false;
    this.summaryIcon = "";

  }

}
