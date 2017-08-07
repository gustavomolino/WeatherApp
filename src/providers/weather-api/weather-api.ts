import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConstantsProvider } from '../app-constants/app-constants'

@Injectable()
export class WeatherApiProvider {

  weatherURL: string;
  private constantVar: any;

  constructor(public http: Http, constantVar: AppConstantsProvider ) {
    this.constantVar = constantVar;
    this.weatherURL = constantVar.getForecastURL();
  }

  getCurrentWeather(longitude: any, latitude:any){
    return this.http.get(this.weatherURL+latitude+","+longitude)
    .map(res => res.json())
  }

  getGeometry(googleAPIURL: any, location: any){
    return this.http.get(googleAPIURL+"'"+location+"'")
    .map(res => res.json())
  }

}
