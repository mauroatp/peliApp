import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

pelicula: any;
regresarA: string ="";
busqueda: string ="";

constructor(public ps: PeliculasService,
  public route: ActivatedRoute) { 

    this.route.params.subscribe(parametros => {
      
      if(parametros['busqueda']){
        this.busqueda = parametros['busqueda'];
      }

      this.regresarA = parametros['pag'];
      this.ps.getPelicula( parametros['id'])
              .subscribe(pelicula => this.pelicula = pelicula)
    });
  }

  ngOnInit() {
  }

}
