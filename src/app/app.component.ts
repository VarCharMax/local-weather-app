import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="mat-typography">
    <mat-toolbar color="primary"><span>LocalCast Weather</span></mat-toolbar>
    <div fxLayoutAlign="center">
      <h3 class="mat-caption">Your city, your forecast, right now!</h3>
    </div>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
      <div fxFlex="320px">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Current Weather</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <app-current-weather></app-current-weather>
          </mat-card-content>
        </mat-card>
      </div>
      <div fxFlex></div>
    </div>
  </div>`,
  styleUrls: [],
})
export class AppComponent {}
