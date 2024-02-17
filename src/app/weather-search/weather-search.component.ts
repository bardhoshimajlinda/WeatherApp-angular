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
  todayDate = new Date();
  icon: any;

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
          console.log(data);
          this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        },
        (error) => {
          console.error('Error fetching weather:', error);
        }
      );
  }

  protected readonly Math = Math;
}
