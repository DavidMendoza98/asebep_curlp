import { Component, OnDestroy, OnInit, ChangeDetectorRef} from '@angular/core';
import { response } from 'express';
import { DataManagerService } from './services/data-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'horas_asebep';
  data_db:[]|any=[]; // json con los datos
  listOfCurrentPageData: readonly any[] = []; // paginación
  encabezados:[] | any=[]; // permiten generar una tabla dinamica
  encabezados_sin_guiones:[] | any=[]; // muestra los encabezados sin guiones y en minuscula, solo primer letra mayuscula
  numCuenta: string =''; // para buscar por num de cuenta
  exist:boolean=false; // si encuentra un registro cambia y muestra info
  dontExist:boolean=false; // si no encuentra muestra un mensaje
  constructor(private data:DataManagerService,private cd: ChangeDetectorRef){
    
  }
  ngOnInit():void {
    //this.initData();
    
  }
  ngOnDestroy(): void {
  }

  async initData():Promise<any>{
    // await this.data.initData().subscribe((response)=>{
    //   this.data_db = JSON.parse(response);
    //   this.encabezados = Object.keys(this.data_db[0]);
    //   this.encabezados_sin_guiones = this.encabezados.map(function(elemento:string) {
    //     elemento = elemento.replace(/_/g, " ");
    //     return elemento.charAt(0).toUpperCase() + elemento.slice(1).toLowerCase();
    //   });
    //   console.log('headers',this.encabezados);
    // })

    await this.data.alterData().subscribe((response)=>{
      this.data_db = this.data.parseCsvToJson(response);
      
      this.encabezados = Object.keys(this.data_db[0]);
      
      this.encabezados_sin_guiones = this.encabezados.map(function(elemento:string) {
        elemento = elemento.replace(/_/g, " ");
        return elemento.charAt(0).toUpperCase() + elemento.slice(1).toLowerCase();
      });
      console.log('headers',this.encabezados);
    })
  }
  buscarDato():void{
    console.log('Data:',this.data_db);
    const dato = this.data_db.find((element: { num_cuenta: string; }) => Number(element.num_cuenta) === Number(this.numCuenta));
    console.log('encontrado: ',dato);
    if(dato){this.exist = true};
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly any[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    console.log(listOfCurrentPageData);
  }
}
