import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'; 

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  termino : string = '';
  debouncer : Subject<string> = new Subject(); 
  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input() placeholder : string = "";
  

  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(500)
    ).subscribe( valor => {
      this.onDebounce.emit( valor );
    })
  }

  constructor() { }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada( event : any){
    this.debouncer.next( this.termino );
  }
}
