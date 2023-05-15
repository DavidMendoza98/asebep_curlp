import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  // variables globales
  public UserData:any
  public error:string|any;

  // fin variables globales
  constructor(private titleService: Title,
              private auth:AuthService,
              private router:Router,
              private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.titleService.setTitle('Iniciar Sesión');
  }
  ngOnDestroy(): void {
    
  }

  validate(param:any):void{
    this.auth.login(param.username,param.password)
    .subscribe((response:any) =>{
       this.auth.set_token(response.token)
       this.auth.set_estudiante(response.data[0].estudiante);
       this.auth.set_user(response.data[0].usuario)
       this.router.navigate(['/feed']);
    }, (error:any) => {
      this.error = error
    })
    
  }

}
