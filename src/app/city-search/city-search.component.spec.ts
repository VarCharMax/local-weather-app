import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { WeatherService } from '../weather/weather.service';
import { WeatherServiceFake } from '../weather/weather.service.fake';
import { CitySearchComponent } from './city-search.component';

describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearchComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
      ],
    });
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
