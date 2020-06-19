import { Component, OnInit, Input } from '@angular/core'; //input paso la data de los otros componentes

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

@Input('peliculas') peliculas;
@Input('titulo') titulo;


  constructor() { }

  ngOnInit() {
  }

}
