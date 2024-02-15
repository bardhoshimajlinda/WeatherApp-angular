import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})

export class WeatherSearchComponent {
  cityName: string = '';
  weatherData: any;
  errorMessage: string | undefined;

  constructor(private weatherService: WeatherService) { }

  search() {
    if (this.cityName.trim() === '') {
      alert('Please enter a city name.');
      return;
    }

    this.weatherService.getWeather(this.cityName)
      .subscribe(
        (data) => {
          this.weatherData = data;
        },
        error => {
          this.errorMessage = 'An error occurred while fetching data. Please try again later.';
        }
      );
  }

  protected readonly Math = Math;
}
