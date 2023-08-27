import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchComponent } from './city-search.component';
import { WeatherService } from '../weather/weather.service';
import { WeatherServiceFake } from '../weather/weather.service.fake';

describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearchComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
    });
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
