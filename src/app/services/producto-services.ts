import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoServices {


 private http = inject(HttpClient)

 private API_PRODUCTOS = "https://jritsqmet.github.io/web-api/medico.json"

 //TRAER LOS DATOS
 //GET-PRODUCTOS

 getProductos() : Observable<any>{
   return this.http.get(this.API_PRODUCTOS)

 }


}
