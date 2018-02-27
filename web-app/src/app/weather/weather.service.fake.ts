import { IWeatherService } from './weather.service'
import { ICurrentWeather } from '../interfaces'

import { Observable } from 'rxjs/Rx'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'IR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }

  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return Observable.of(this.fakeWeather)
  }
}
