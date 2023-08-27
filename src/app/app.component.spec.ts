import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitySearchComponent } from './city-search/city-search.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather/weather.service';
import { WeatherServiceFake } from './weather/weather.service.fake';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, CurrentWeatherComponent, CitySearchComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
      imports: [MaterialModule, BrowserAnimationsModule, ReactiveFormsModule],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a span tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('LocalCast Weather');
  });
});
