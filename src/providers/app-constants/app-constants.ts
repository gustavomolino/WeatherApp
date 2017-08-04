import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppConstantsProvider {

  googleAPIURL: string;
  forecastURL: string;

  constructor(public http: Http) {
    this.googleAPIURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
    this.forecastURL = "https://api.darksky.net/forecast/fe5a993c3926250567040e1aaeaffa55"
  }

  getGoogleAPIURL(){
    return this.googleAPIURL;
  }

  getForecastURL(){
    return this.forecastURL;
  }

}
