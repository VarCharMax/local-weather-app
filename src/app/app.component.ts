import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="mat-typography">
    <mat-toolbar color="primary"><span>LocalCast Weather</span></mat-toolbar>
    <mat-card-title>
      <div fxLayoutAlign="center">
        <div class="mat-caption vertical-margin">
          Your city, your forecast, right now!
        </div>
      </div></mat-card-title
    >
    <div fxLayout="row">
      <div fxFlex></div>
      <div fxFlex="320px">
        <mat-card>
          <mat-card-header>
            <mat-card-title
              ><div class="mat-headline">Current Weather</div></mat-card-title
            >
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
export class AppComponent {
  title = 'local-weather-app';
}
