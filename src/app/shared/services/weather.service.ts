import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityWeatherResponse } from '../models/city-weather-response';
import { WeatherConditions } from '../data/weather';

@Injectable()
export class WeatherService {
      private readonly FORECAST_API: string = 'http://api.openweathermap.org/data/2.5/forecast';

      constructor(
            private http: HttpClient,
            @Inject('API_KEY') private API_KEY: string,
            @Inject('AMSTERDAM_ID') private AMSTERDAM_ID: string,
            @Inject('MOSCOW_ID') private MOSCOW_ID: string,
            @Inject('NEW_YORK_ID') private NEW_YORK_ID: string) { }

      public getAmsterdamForecast(): Observable<CityWeatherResponse> {
            return this.getForecast(this.AMSTERDAM_ID);
      }

      public getMoscowForecast(): Observable<CityWeatherResponse> {
            return this.getForecast(this.MOSCOW_ID);
      }

      public getNewYorkForecast(): Observable<CityWeatherResponse> {
            return this.getForecast(this.NEW_YORK_ID);
      }

      public calculateForecastMood(weatherResponse: CityWeatherResponse): number {
            const maxRank: number = (weatherResponse.cnt * WeatherConditions.MAX_SCORE);
            let currentScore: number = 0;
            weatherResponse.list.forEach((weather) => {
                  weather.weather.forEach((w) => {
                        const condition = WeatherConditions.conditions.find(c => c.id === w.id);
                        if (condition) {
                              currentScore += condition.score;
                        }
                  });
            });
            return Math.round((currentScore * 100) / maxRank);
      }

      private getForecast(cityId: string): Observable<CityWeatherResponse> {
            return this.http.get<CityWeatherResponse>(this.formatUrl(cityId));
      }

      private formatUrl(cityId: string): string {
            return `${this.FORECAST_API}?id=${cityId}&units=metric&appid=${this.API_KEY}`;
      }
}
