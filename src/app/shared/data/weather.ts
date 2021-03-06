export class WeatherConditions {
      public static MAX_SCORE: number = 10;
      public static conditions: Array<Condition> = [
            { id: 200, description: 'thunderstorm with light rain', score: 3 },
            { id: 201, description: 'thunderstorm with rain', score: 2 },
            { id: 202, description: 'thunderstorm with heavy rain', score: 1 },
            { id: 210, description: 'light thunderstorm', score: 3 },
            { id: 211, description: 'thunderstorm', score: 2 },
            { id: 212, description: 'heavy thunderstorm', score: 4 },
            { id: 221, description: 'ragged thunderstorm', score: 3 },
            { id: 230, description: 'thunderstorm with light drizzle', score: 4 },
            { id: 231, description: 'thunderstorm with drizzle', score: 3 },
            { id: 232, description: 'thunderstorm with heavy drizzle', score: 2 },
            { id: 300, description: 'light intensity drizzle', score: 5 },
            { id: 301, description: 'drizzle', score: 5 },
            { id: 302, description: 'heavy intensity drizzle', score: 4 },
            { id: 310, description: 'light intensity drizzle rain', score: 5 },
            { id: 311, description: 'drizzle rain', score: 4 },
            { id: 312, description: 'heavy intensity drizzle rain', score: 3 },
            { id: 313, description: 'shower rain and drizzle', score: 4 },
            { id: 314, description: 'heavy shower rain and drizzle', score: 3 },
            { id: 321, description: 'shower drizzle', score: 5 },
            { id: 500, description: 'light rain', score: 6 },
            { id: 501, description: 'moderate rain', score: 4 },
            { id: 502, description: 'heavy intensity rain', score: 2 },
            { id: 503, description: 'very heavy rain', score: 2 },
            { id: 504, description: 'extreme rain', score: 2 },
            { id: 511, description: 'freezing rain', score: 3 },
            { id: 520, description: 'light intensity shower rain', score: 5 },
            { id: 521, description: 'shower rain', score: 4 },
            { id: 522, description: 'heavy intensity shower rain', score: 3 },
            { id: 531, description: 'ragged shower rain', score: 4 },
            { id: 600, description: 'light snow', score: 3 },
            { id: 601, description: 'snow', score: 2 },
            { id: 602, description: 'heavy snow', score: 1 },
            { id: 611, description: 'sleet', score: 3 },
            { id: 612, description: 'shower sleet', score: 3 },
            { id: 615, description: 'light rain and snow', score: 3 },
            { id: 616, description: 'rain and snow', score: 3 },
            { id: 620, description: 'light shower snow', score: 3 },
            { id: 621, description: 'shower snow', score: 2 },
            { id: 622, description: 'heavy shower snow', score: 1 },
            { id: 701, description: 'mist', score: 3 },
            { id: 711, description: 'smoke', score: 2 },
            { id: 721, description: 'haze', score: 4 },
            { id: 731, description: 'sand, dust whirls', score: 2 },
            { id: 741, description: 'fog', score: 4 },
            { id: 751, description: 'sand', score: 2 },
            { id: 761, description: 'dust', score: 2 },
            { id: 762, description: 'volcanic ash', score: 1 },
            { id: 771, description: 'squalls', score: 3 },
            { id: 781, description: 'tornado', score: 1 },
            { id: 800, description: 'clear sky', score: WeatherConditions.MAX_SCORE },
            { id: 801, description: 'few clouds', score: 9 },
            { id: 802, description: 'scattered clouds', score: 8 },
            { id: 803, description: 'broken clouds', score: 7 },
            { id: 804, description: 'overcast clouds', score: 6 }
      ];
}

export class Condition {
      public id: number;
      public description: string;
      public score: number;
}
