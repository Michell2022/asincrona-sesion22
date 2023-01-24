import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // Creo una variable privada llamada auth de tipo Auth.
  constructor(private auth:Auth) { }

  registerUser({email, password}:any){
    //VERIFICAMOS SI LOS DATOS LLEGAN AL SERVICIO USANDO CONSOLE.
    // console.log(email);
    // console.log(password);

    // Mando el email y password
    return createUserWithEmailAndPassword(this.auth, email, password)
  }



  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }



  logout(){
    return signOut(this.auth);
  }
}
