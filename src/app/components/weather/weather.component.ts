import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { TabComponent } from 'src/app/shared/modules/tabs/components/tab/tab.component';
import { CityWeatherResponse } from 'src/app/shared/models/city-weather-response';
import { Observable } from 'rxjs';

@Component({
      selector: 'weather',
      templateUrl: './weather.component.html',
      styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
      public citiesTabs: CitiesTabs = new CitiesTabs(this.weatherService);

      constructor(public weatherService: WeatherService) { }

      public ngOnInit(): void {
            this.getCityMood(this.citiesTabs.amsterdam, true);
      }

      public onSelectedTabChanged(tab: TabComponent): void {
            let city: CityTabData;
            switch (tab.id) {
                  case this.citiesTabs.amsterdam.id: city = this.citiesTabs.amsterdam; break;
                  case this.citiesTabs.moscow.id: city = this.citiesTabs.moscow; break;
                  case this.citiesTabs.newYork.id: city = this.citiesTabs.newYork; break;
                  default: city = null;
            }
            if (city && !city.fetched) {
                  this.getCityMood(city);
            }
      }

      private getCityMood(city: CityTabData, onLoad?: boolean): void {
            city.fetching = true;
            city.fecthObservable.subscribe((response: CityWeatherResponse) => {
                  if (response && response.cod === '200') {
                        this.calculateMood(response, city);
                        if (onLoad) {
                              this.runAutoRefreshData();
                        }
                  } else {
                        this.cityErrorHandling(response, this.citiesTabs.amsterdam);
                  }
            }, (error) => {
                  this.cityErrorHandling(error, this.citiesTabs.amsterdam);
            });
      }

      private cityErrorHandling = (object: any, city: CityTabData): void => {
            city.fetching = false;
            console.log(object);
            alert(`Something went wrong while fetching ${city.title}'s forecast, try again later!`);
      }

      private calculateMood(weatherResponse: CityWeatherResponse, city: CityTabData): void {
            city.mood = this.weatherService.calculateForecastMood(weatherResponse);
            city.fetched = true;
            city.fetching = false;
      }

      private runAutoRefreshData(): void {
            setInterval(() => {
                  if (this.citiesTabs.amsterdam.fetched) {
                        this.getCityMood(this.citiesTabs.amsterdam);
                  }
                  if (this.citiesTabs.moscow.fetched) {
                        this.getCityMood(this.citiesTabs.moscow);
                  }
                  if (this.citiesTabs.newYork.fetched) {
                        this.getCityMood(this.citiesTabs.newYork);
                  }
            }, 600000);
      }
}

class CitiesTabs {
      public amsterdam: CityTabData = new CityTabData(1, 'Amsterdam', this.weatherService.getAmsterdamForecast());
      public moscow: CityTabData = new CityTabData(2, 'Moscow', this.weatherService.getMoscowForecast());
      public newYork: CityTabData = new CityTabData(3, 'New York', this.weatherService.getNewYorkForecast());

      constructor(public weatherService: WeatherService) { }
}

class CityTabData {
      public id: number;
      public title: string;
      public mood: number;
      public fecthObservable: Observable<CityWeatherResponse>;
      public fetching: boolean;
      public fetched: boolean;

      constructor(id: number, title: string, fecthObservable: Observable<CityWeatherResponse> = null, mood: number = 0) {
            this.id = id;
            this.title = title;
            this.mood = mood;
            this.fecthObservable = fecthObservable;
            this.fetching = false;
            this.fetched = false;
      }
}
