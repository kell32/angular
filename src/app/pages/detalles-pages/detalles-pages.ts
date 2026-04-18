import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseDataService } from '../../services/firebase-data-service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-detalles-pages',
  imports: [FormsModule],
  templateUrl: './detalles-pages.html',
  styleUrl: './detalles-pages.css',
})
export class DetallesPages {

  private servicio = inject(FirebaseDataService)

  private ruta = inject(ActivatedRoute)

 


  //traeoms el parametro de la ruta 
  parametro= this.ruta.snapshot.paramMap.get("id")

  producto : any = this.servicio.getUnicoServicio( this.parametro)

   id =''
   nombre =''
   ciudad =''
   precio = ''


  editar(producto : NgForm){
    this.servicio.editaUnico(producto.value)
    
  }
}
