import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/enviroments';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private token:string = this.auth.get_token();
  constructor(private http: HttpClient,
              private auth:AuthService) { }

  httpget<T>(url:string, param?:string):Observable<T>{
    url = environment.API + url
    let urlGet = (param == null) ? url : url  + param;

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Token 75ba0bf6f14bab824c02b32815800b9e2a590e70`,
      }),
    };
    var response = this.http.get<T>(url,{headers:{
      "Authorization": "Token b5761329a44cfa9729f97f7361d32528660f7e2f"
     }})
      .pipe(catchError(this.handleError()));

      return response;
  }

  httppost<T>(url: string, contentBody: any = {}): Observable<T> {    
    var response = this.http.post<T>(url, contentBody)
        .pipe(catchError(this.handleError()));
    return response;
  }

  httpput<T>(url: string, contentBody: any = {}): Observable<T> {    
    var response = this.http.put<T>(url, contentBody)
        .pipe(catchError(this.handleError()));
    return response;
  }

  httpdelete<T>(url:string):Observable<T>{
    var response = this.http.delete<T>(url)
      .pipe(catchError(this.handleError()));

      return response;
  }

  private handleError<T = any>() {
    return (error: HttpErrorResponse): Observable<T> => {
      

      if(error.error.hasError){
       
      }

      if(error.status == 401){  
        /**
         * Error 401 es cuando el usuario no esta autenticado al backend
         */
      }

      if(error.status == 422){
        let mensaje = '';

        /**
         * obtener error, por lo general el 422 viene del validor del backend
         *  aqui se revisa segun el formato, que definan con su backend
         */

        throw new Error(mensaje); 
      }

      console.log(error);

      throw new Error(`Invalid`); //throwError('')
    }
  }
}
