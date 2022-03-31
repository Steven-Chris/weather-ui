import { Component } from '@angular/core';
import { WeatherServiceService } from 'src/services/weather-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weather-ui';

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit() {
    this.weatherService
      .getWeather()
      .subscribe((response) => console.log(response));
  }
}
