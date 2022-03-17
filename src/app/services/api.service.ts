import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getData } from '../data';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseurl="https://uiexercise.onemindindia.com/api/Product"
  baseurl2="https://uiexercise.onemindindia.com/api/OrderProducts"
  
  getpro():Observable<getData[]>{
    return this.http.get<getData[]>(this.baseurl)
  }
  create(data:getData){
    return this.http.post(this.baseurl,data)
  }

 
  placeorder(data:any){
    return this.http.post(this.baseurl2,data)
  }
}