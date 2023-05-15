import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  subs:Subscription|any;
  archivo:[] | any=[];

  constructor(private http: HttpClient) { }
  parseCsvToJson(csv: string) {
    const options = {
      header: true,
      delimiter: ',',
      skipEmptyLines: true,
    };
  
    const result = Papa.parse(csv, options);
  
    return result.data;
  }
  alterData(){
    let url:string = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQqtHZKCxjRLD6pGYJIkrTxFXRAXpgoiFSX7HQF-GHZIz1c7CubGPFfYVvWJAfXu4NoI6AwwCkeToIE/pub?gid=0&single=true&output=csv'
    return this.http.get(url, { responseType: 'text' });
  }

  initData(){
    const url:string = 'assets/spreadsheets/marzo.json'; 
    return this.http.get(url, { responseType: 'text' })
  }
  get(){
    return this.archivo;
  }
}
