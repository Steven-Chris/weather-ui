import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {}
  getWeather() {
    return this.http.get('http://localhost:4000/weather/getWeather');
  }
}
