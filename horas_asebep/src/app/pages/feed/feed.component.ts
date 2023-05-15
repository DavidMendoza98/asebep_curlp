import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Estudiante } from '../../interfaces/estudiante.interface';
import { ActividadService } from 'src/app/services/actividad.service';
import { Actividad } from 'src/app/interfaces/actividad.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit,OnDestroy {
  //variables
  public estudiante: Estudiante | any;
  public actividadesFromDb:Array<Actividad> = [];
  public error:boolean=false;
  public busqueda:string='';
  private observable:Observable<any>|any;
  //fin variables
  constructor(private titleService: Title,
              private auth:AuthService,
              private router:Router,
              private route:ActivatedRoute,
              private actividadService:ActividadService) { }
  
  ngOnInit(): void {
    this.titleService.setTitle('Actividades');
    this.estudiante = this.auth.get_estudiante();
    this.initData()
    
  }
  ngOnDestroy(): void {
    
  }
  async initData(){
    await this.actividadService.getAllActividades().subscribe({
      next: (response:any) => {
        this.actividadesFromDb = response;
        console.log(response);
      },
      error: (error:any) => {
        this.error = true;
        console.log(error);
      }
    });
  }


  toActividadDetail(id:number){
    const idCript = this.auth.cript(id);
    this.router.navigate(['/actividad_detail'], { queryParams: { id: idCript }, queryParamsHandling: 'merge' });
  }
}

