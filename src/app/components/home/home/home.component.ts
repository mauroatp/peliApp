import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

cartelera: any;
populares: any;
popularesNinos: any;


  constructor(private ps: PeliculasService) {
    this.ps.getCartelera()
      .subscribe( resp =>  this.cartelera = resp["results"]);
    this.ps.getPopulares()
      .subscribe( resp =>  this.populares = resp["results"]);
    this.ps.getPopularesNinos()
      .subscribe( resp =>  this.popularesNinos = resp["results"]);

  }

  ngOnInit() {
  }

}
