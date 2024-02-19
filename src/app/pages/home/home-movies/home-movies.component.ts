import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MovieService } from '@app/services/movie-service.service';
import { SearchParameterService } from '@api-omdb-front/services';

@Component({
  selector: 'app-home-movies',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  providers: [SearchParameterService],
  templateUrl: './home-movies.component.html',
  styleUrl: './home-movies.component.scss',
})
export class HomeMoviesComponent implements OnInit {
  movies$?: Observable<any[]>;

  constructor(private movieService: MovieService) {}

  searchForm = new FormControl();

  ngOnInit() {
    this.movies$ = this.searchForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchString) =>
        this.movieService.getMovieSearch(searchString)
      ),
      map((res: any) => (this.movies$ = res[0]))
    );
  }

  // searchByTitle() {
  //   this.title$ = this.searchForm.valueChanges.pipe(
  //     debounceTime(500),
  //     distinctUntilChanged(),
  //     switchMap(() =>
  //       this.movieService.getMovieByTitle()
  //     ),
  //     map((res: any) => {
  //       this.movies$ = res
  //     })
  //   );
  // }

  clearForm() {
    this.searchForm.reset();
  }
}

export interface GetTitleParams {
  /**
   * Title of movie or series
   */
  t: string;

  /**
   * Year of release
   */
  y?: number;

  /**
   * Return movie or series
   */
  type?: 'movie' | 'series';

  /**
   * The response type to return
   */
  r?: 'json' | 'xml';

  /**
   * Return short or full plot
   */
  plot?: 'short' | 'full';

  /**
   * JSONP callback name
   */
  callback?: string;
}
