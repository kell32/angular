import { Injectable } from '@angular/core';
import { onValue, ref, remove, set, update } from 'firebase/database';
import { db } from '../config/Config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDataService {



  //Guardar

  guardarServicio(producto: any) {

    set(ref(db, 'producto/' + producto.id), {
      nombre: producto.nombre,
      ciudad: producto.proveedor.ubicacion.ciudad,
      precio: producto.info.precio

    });
  }

  //GET TODOS 
  getServicioMedicos() : Observable<any> {
    let carrito : any
    const starCountRef = ref(db, 'producto/' );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      carrito = data
    
    });
     return carrito
  }
    
  //eliminar
  deleteMedico(id : string){
    remove(ref(db, 'producto/' + id));
  }

  //editar
  editaUnico(producto:any){
     update(ref(db, 'producto/' + producto.parametro), {
      nombre: producto.nombre,
      ciudad: producto.proveedor.ubicacion.ciudad,
      precio: producto.info.precio

    });

  }
  //lerr unico 
   getUnicoServicio(id : any) : Observable<any> {
    let carrito : any
    const starCountRef = ref(db, 'producto/'+ id );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      carrito = data
    
    });
     return carrito
  }

}
