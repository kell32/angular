import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-pages',
  imports: [FormsModule],
  templateUrl: './registro-pages.html',
  styleUrl: './registro-pages.css',
})
export class RegistroPages {

  private servicio = inject(FirebaseAuthService)

  nombre=""
  apellido=""
  correo=""
  contrasena=""


  registro(dato : any){
     this.servicio.registro(dato.value)
  }



}
