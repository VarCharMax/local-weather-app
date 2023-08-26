import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { WeatherService } from './weather/weather.service';
@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexModule,
    MaterialModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
