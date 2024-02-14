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
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MovieService } from '@app/services/movie-service.service';
import { SearchParameterService } from '@api-omdb-front/services';

@Component({
  selector: 'app-home-movies',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],providers: [SearchParameterService],
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
      map((res: any) => res.Search)
    );

  }


  clearForm(){
    this.searchForm.reset()
  }
}

