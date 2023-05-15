import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments';
import { Usuario } from '../interfaces/usuario.interface';
import { Estudiante } from '../interfaces/estudiante.interface';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user:Usuario|any;
  private estudiante:Estudiante|any;
  private token:string='';

  constructor(private http:HttpClient) { 

  }

  public login(username:string, password:string):any {
     const url = environment.API+'login/';

     const params = new HttpParams({
      fromObject: {
        grant_type: 'password',
        username: username,
        password: password,
      }
      });
      const body = {
        "username":"davidMendoza",
        "password":"A@123456"
      }

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      return this.http.post(url,body);
      //return CallHttpService.httpPost()
      
   }

  get_user(): Usuario {
    return this.user;
  }

  set_user(value: Usuario) {
    this.user = value;
  }

  get_estudiante(): Estudiante {
    return this.estudiante;
  }

  set_estudiante(value: Estudiante) {
    this.estudiante = value;
  }

  get_token(): string {
    return this.token;
  }

  set_token(value: string) {
    this.token = value;
  }

  cript(num:any){
    const key = environment.KEY;
    return CryptoJS.AES.encrypt(num.toString(), key).toString();
  }
  uncript(ciphertext:any){
    const key = environment.KEY;
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8); 
    return decrypted;
  }
}
