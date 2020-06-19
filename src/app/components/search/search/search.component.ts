import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';

//importo el activated route pararecibir el parametro por url
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

buscar: string ="";
peliculas: any;
  constructor(public ps: PeliculasService,
              public route: ActivatedRoute) { 

   this.route.params.subscribe(parametros => {
     if(parametros["texto"]){
       this.buscar = parametros["texto"];
       this.buscarPelicula();
     }
   });             
              }

  ngOnInit() {
  }

  buscarPelicula(){
    
    if(this.buscar.length === 0) {
      return;
    }
    console.log("buscopeli search");
    console.log(this.buscar);
    this.ps.buscarPelicula(this.buscar);

  }

}
