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
        (error) => {
          console.error('Error fetching weather:', error);
        }
      );
  }

  protected readonly Math = Math;
}
