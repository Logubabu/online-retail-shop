import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { storeData } from 'src/app/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private url: ApiService) { }
  productData: any = []
  addData:any= storeData;


  ngOnInit(): void {
    this.url.getpro().subscribe(url => this.productData = url)
  
  }
addcart(items:any){
  this.addData.push(items)
  }
}
