export class CityWeatherResponse {
    public cod: string;
    public message: number;
    public cnt: number;
    public list: Array<WeatherOnDate>;
    public city: City;
}

export class WeatherOnDate {
    public dt: number;
    public main: MainWeatherData;
    public weather: Array<ConditionData>;
    public dt_txt: number;
}

export class MainWeatherData {
    public temp: number;
    public temp_min: number;
    public temp_max: number;
    public pressure: number;
    public sea_level: number;
    public grnd_level: number;
    public humidity: number;
    public temp_kf: number;
}

export class ConditionData {
    public id: number;
    public main: string;
    public description: string;
    public icon: string;
}

export class City {
    public id: number;
    public name: string;
    public coord: Coordinates;
    public country: string;
}

export class Coordinates {
    public lat: number;
    public lon: number;
}
