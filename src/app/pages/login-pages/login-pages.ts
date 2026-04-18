import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth-service';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-pages',
  imports: [FormsModule],
  templateUrl: './login-pages.html',
  styleUrl: './login-pages.css',
})
export class LoginPages {

  private service = inject(FirebaseAuthService) 

  acceso = sessionStorage.getItem('token')

  correo=""
  contrasena=""

  login(dato : any){

    return this.service.login(dato.value)

  }

  logout(){
    this.service.logout()
    location.reload()
  }





}
