import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieSearch(query: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=f148d159&s=${query}`);
  }

  getMovieByTitle(query: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=f148d159&t=${query}`).subscribe((data: any) => {

    });
  }


}
