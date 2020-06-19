import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeliculasApp';

  constructor(public ps: PeliculasService){
    //this.ps.getPopulares()
    //.subscribe( resp => console.log(resp));

    //this.ps.buscarPelicula('american pie')
    //        .subscribe( resp => console.log(resp["results"]));
  }
}
