import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map, delay } from 'rxjs/operators'; //mapeo cualquier cosa observable, osea la respuesta del crud firebase
import { PeliculaModel } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = '3a8cde0982a672320a8472e944eecdcb';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  peliculas: any[] = [];

  constructor(private http: HttpClient) { }

  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    let desdeMonth = ("0" + (desde.getMonth() + 1)).toString().slice(-2);
    let hastaMonth = ("0" + (hasta.getMonth() + 1)).toString().slice(-2);

    let desdeStr = `${desde.getFullYear()}-${desdeMonth}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hastaMonth}-${hasta.getDate()}`;
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;
    return this.http.get(url);
  }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url);
    //return this.http.jsonp( url, 'callback=JSON_CALLBACK' );

  }
  getPopularesNinos() {
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url);
    //return this.http.jsonp( url, 'callback=JSON_CALLBACK' );

  }

  buscarPelicula(texto: string) {

    const url = `${this.urlMoviedb}/search/movie?query=${texto}&language=es&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    const res = this.http.get(url).pipe(map(( res: []) => {
      this.peliculas = res["results"];
    }
    )).subscribe();
    return this.peliculas;
  }

  getPelicula( id: string) {
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;
    return this.http.get(url);
    //return this.http.jsonp( url, 'callback=JSON_CALLBACK' );

  }

}
