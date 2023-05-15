import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Actividad } from 'src/app/interfaces/actividad.interface';
import { ActividadService } from 'src/app/services/actividad.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.css']
})
export class ActividadDetailComponent implements OnInit,OnDestroy{

  //variables
  public idActividad:number|any;
  private subs: Subscription = new Subscription;
  public actividad:Actividad| any;
  public comentarioBox:string='';
  //finvariables
  constructor(private route:ActivatedRoute,
              private router:Router,
              private titleService: Title,
              private auth:AuthService,
              private actividadService:ActividadService){

              }
  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    this.idActividad = parseInt(this.auth.uncript(id));
    this.initData()
    
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  async initData(){
    let id = this.idActividad;
    this.subs = await this.actividadService.getActividadById(id).subscribe(response=>{
      this.actividad = response;
      this.titleService.setTitle(response.nombre);
    }, error =>{
      console.log(error);
    });
  }

  public convertirFecha(fecha: string): string {
    return new Date(fecha).toLocaleString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' , hour12: true}).replace(',', '');
  }
}
