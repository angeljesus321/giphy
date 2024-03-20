import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GifService } from '../../services/gif.service';
import { Datum } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-buscar-gif',
  templateUrl: './buscar-gif.component.html',
  styleUrls: ['./buscar-gif.component.css']
})
export class BuscarGifComponent {

  constructor(private fb: FormBuilder, private gifService: GifService){ }

  lista: Datum [] = []

  formulario: FormGroup = this.fb.group({
    busqueda: ['', Validators.required]
  });

  mostrarGif(term : string){
    
}

  onSearch(){
    if(this.formulario.invalid) return;

    const value = this.formulario.controls['busqueda'].value;

    this.gifService.getGifs(value)
    .subscribe({
      next: gifs => {
       if (Array.isArray(gifs)) {
        this.lista = [...gifs,...this.lista];
       } else {
        this.lista = [...gifs.data, ...this.lista];
       }
       this.gifService.listarProductos.emit(this.lista)
    },

    error: (e) => {
      console.log(e)
    }
    
  })
  }
}
