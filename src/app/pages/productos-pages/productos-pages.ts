import { Component, inject } from '@angular/core';
import { ProductoServices } from '../../services/producto-services';
import { CommonModule } from '@angular/common';
import { FirebaseDataService } from '../../services/firebase-data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos-pages',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos-pages.html',
  styleUrl: './productos-pages.css',
})
export class ProductosPages {

  private service = inject(ProductoServices)

  //traigo firebase para traer los productos 
  private servicioFireBase= inject(FirebaseDataService)

  //traemos el servicio 

  productos = this.service.getProductos()
  buscar=""

  guardar(producto : any ){
    this.servicioFireBase.guardarServicio(producto)

  }







}
