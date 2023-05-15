import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor(private titleService: Title,
              private router:Router,
              private auth:AuthService){}

  ngOnInit(){
    this.titleService.setTitle('Administración');
  }

  redirect(path:string){
    const idCript = this.auth.cript('all');
    this.router.navigate(['admin/actividad'],{ queryParams: { view: idCript }, queryParamsHandling: 'merge' })
  }
}
