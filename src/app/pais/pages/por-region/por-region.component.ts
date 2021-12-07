import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
    `]
})
export class PorRegionComponent{

  regiones : string[] = ["EU", "EFTA", "CARICOM", "PA", "AU", "USAN", "EEU", "AL", "ASEAN", "CAIS", "CEFTA", "NAFTA", "SAARC"];
  regionActivada : string = '';
  paises : Country[] = [];

  constructor( private PaisService : PaisService ) { }

  buscarRegion( region : string){

    if(this.regionActivada === region){ return; }

    this.regionActivada = region;
    this.paises = [];
    this.PaisService.buscarRegion(region)
      .subscribe(
        respuesta =>{
          this.paises = respuesta;
          console.log(respuesta);
        })
  }

  getClassCSS( region : string) : string{
    return (region === this.regionActivada) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
}
