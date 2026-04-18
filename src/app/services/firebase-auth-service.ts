import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/Config';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {

//login
 login(datosUsuario : any){
  signInWithEmailAndPassword(auth, datosUsuario.correo, datosUsuario.contrasena)
  .then((userCredential) => {
    
    const user = userCredential.user;
    alert("Iniciaste Sesión Correctamente")
    sessionStorage.setItem('token','true')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
 }

 //Registro
 registro( registroUsuario : any){
  createUserWithEmailAndPassword(auth, registroUsuario.correo, registroUsuario.contrasena)
  .then((userCredential) => {
    
    const user = userCredential.user;
    alert("Usuario Registrado correctamente")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
 }

 //logout
 logout(){
  signOut(auth).then(() => {
  alert("Cuenta Cerrada")
  //para que el storage se elimine 
  sessionStorage.removeItem('token')
}).catch((error) => {
  alert("Error")

});
 }
}
