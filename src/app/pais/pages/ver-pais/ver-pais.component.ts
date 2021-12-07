import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  

  constructor( 
    private ActivatedRoute : ActivatedRoute,
    private PaisService : PaisService) { }
  
  ngOnInit() : void {

    this.ActivatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.PaisService.getPaisPorAlpha( id )), //({ id }) es la desestructuracion de params.id
        tap( console.log )
      )
      .subscribe( 
        resp => { 
          this.pais = resp;
      });

   /* this.activatedRoute.params
      .subscribe( (params) => {
        console.log(params);

        this.PaisService.getPaisPorAlpha(params.id)
          .subscribe( pais => {
            console.log(pais);
          })    
      });*/
  }
}
