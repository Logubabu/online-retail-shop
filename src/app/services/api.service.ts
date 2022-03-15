import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseurl="https://uiexercise.onemindindia.com/api/Product"
  getpro(){
    return this.http.get(this.baseurl)
    
  }
  create(data:any){
    return this.http.post(this.baseurl,data)
  }
}
