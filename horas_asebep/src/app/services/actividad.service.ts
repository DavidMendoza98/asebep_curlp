import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { Actividad } from '../interfaces/actividad.interface';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private client:HttpServiceService) { }

  getAllActividades(){
    return this.client.httpget<Actividad>('actividad/')
  }

  getActividadById(id:number){
    return this.client.httpget<Actividad>('actividad/'+id.toString());
  //   let headersList = {
  //     "Authorization": "Token b5761329a44cfa9729f97f7361d32528660f7e2f"
  //    }
     
  //    return fetch("http://192.168.1.30:4000/actividad/1/", { 
  //      method: "GET",
  //      headers: headersList
  //    });
     
  }
}
