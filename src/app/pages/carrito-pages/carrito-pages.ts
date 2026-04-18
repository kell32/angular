import { Component, inject } from '@angular/core';
import { FirebaseDataService } from '../../services/firebase-data-service';
import { RouterLink } from "@angular/router";
import { Tabla } from '../../components/tabla/tabla';

@Component({
  selector: 'app-carrito-pages',
  imports: [RouterLink],
  templateUrl: './carrito-pages.html',
  styleUrl: './carrito-pages.css',
})
export class CarritoPages {

 private servicio = inject(FirebaseDataService)

 carrito = this.servicio.getServicioMedicos()

 //como database trae datos tipos jason 

 carritoArray = Object.entries(this.carrito).map(([key, val])=>({
  id: key,
  nombre: val.nombre,
  ciudad: val.ciudad,
  precio: val.precio

 }))

 eliminar(id : string){
  this.servicio.deleteMedico(id)
  location.reload()
 }






}
