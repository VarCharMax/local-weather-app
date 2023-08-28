import * as fromSearch from '../reducers/search.reducer';

import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchActions } from '../actions/search.actions';
import { Store } from '@ngrx/store';
import { WeatherService } from '../weather/weather.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent {
  useNgRx = false;
  search = new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor(
    private weatherService: WeatherService,
    private store: Store<fromSearch.State>
  ) {
    this.search.valueChanges
      .pipe(
        takeUntilDestroyed(),
        filter(() => this.search.valid),
        debounceTime(1000),
        tap((searchValue) => this.doSearch(searchValue))
      )
      .subscribe();
  }

  doSearch(searchValue: string | null) {
    if (searchValue === null) return;
    const userInput = searchValue.split(',').map((s) => s.trim());
    const searchText = userInput[0];
    const country = userInput.length > 1 ? userInput[1] : undefined;

    if (this.useNgRx) {
      this.ngRxBasedSearch(searchText, country);
    } else {
      this.behaviorSubjectBasedSearch(searchText, country);
    }
  }

  behaviorSubjectBasedSearch(searchText: string, country?: string) {
    this.weatherService.updateCurrentWeather(searchText, country);
  }

  ngRxBasedSearch(searchText: string, country?: string) {
    this.store.dispatch(SearchActions.search({ searchText, country }));
  }
}
