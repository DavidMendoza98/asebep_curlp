import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Actividad } from 'src/app/interfaces/actividad.interface';
import { ActividadService } from 'src/app/services/actividad.service';
import { AuthService } from 'src/app/services/auth.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  // variables
  public busqueda:string='';
  public view:string='new';
  public error:boolean=false;
  public fecha_inicio:string='';
  public fecha_fin:string='';
  public uploadImageChecked:boolean=false;
  public actividadesFromDb:Array<Actividad> = [];
  //fin variables
  constructor(private route:ActivatedRoute,
              private router:Router,
              private auth:AuthService,
              private actividadService:ActividadService){

  }
  ngOnInit(){
    const view = this.route.snapshot.queryParamMap.get('view');
    if(view) this.view = this.auth.uncript(view);
    this.initData()
  }
  async initData(){
    await this.actividadService.getAllActividades().subscribe({
      next: (response:any) => {
        this.actividadesFromDb = response;
      },
      error: (error:any) => {
        this.error = true;
        console.log(error);
      }
    });
  }
  onOkInicio(result: Date | Date[] | null): void {
    
    if (result instanceof Date) {
      this.fecha_inicio = result.toISOString();
    } 
  }
  onOkFin(result: Date | Date[] | null): void {
    
    if (result instanceof Date) {
      this.fecha_fin = result.toISOString();
      console.log(this.fecha_fin)
    } 
  }
  toCreate(){
    const idCript = this.auth.cript('new');
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/admin/actividad'], { queryParams: { view: idCript }, queryParamsHandling: 'merge' });
    });
    
  }
  toUpdate(){
    const idCript = this.auth.cript('update');
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/admin/actividad'], { queryParams: { view: idCript }, queryParamsHandling: 'merge' });
    });
    
  }
  toAll(){
    const idCript = this.auth.cript('all');
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/admin/actividad'], { queryParams: { view: idCript }, queryParamsHandling: 'merge' });
    });
    
  }
  // onCheckboxChange(event: any) {
  //   this.uploadImageChecked = event.target.checked;
  //   console.log('Valor actual de uploadImageChecked:', this.uploadImageChecked);
  // }
}
