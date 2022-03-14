import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private url:ApiService) { }
  productData:any=[]

  ngOnInit(): void {
this.url.getpro().subscribe(url=>this.productData=url)
  }

}
