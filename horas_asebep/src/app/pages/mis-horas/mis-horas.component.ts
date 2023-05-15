import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-horas',
  templateUrl: './mis-horas.component.html',
  styleUrls: ['./mis-horas.component.css']
})
export class MisHorasComponent  implements OnInit{
  public hours:number=20;
  public colorHours:string='#00a62a'; //#1064c5
  constructor(){

  }
  ngOnInit(){
      if(this.hours < 15 && this.hours > 10) this.colorHours = '#d15c02'
      if(this.hours < 10) this.colorHours = '#aa0101'
  }
}
