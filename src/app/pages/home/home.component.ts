import { Component, Input } from '@angular/core';

import { HomeMoviesComponent } from './home-movies/home-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeMoviesComponent, HttpClientModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input({ required: true }) form!: HomeMoviesComponent['searchForm'];


}
