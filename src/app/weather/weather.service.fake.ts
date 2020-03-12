import { Observable, of } from 'rxjs';

import { ICurrentWeather } from '../interfaces';
import { ICurrentWeatherData } from '../interfaces';
import { IWeatherService } from './weather.service';

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bethesda',
    country: 'US',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  };

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}