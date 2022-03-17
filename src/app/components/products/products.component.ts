import { Component, OnInit } from '@angular/core';
import { getData } from 'src/app/data';
import { ApiService } from 'src/app/services/api.service';
import { storeData } from 'src/app/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private url: ApiService) { }
  productData: getData[] = [];
  addData: getData[] = storeData;


  ngOnInit(): void {
    this.url.getpro().subscribe(url => this.productData = url)
    // this.url.getpro().subscribe(url => this.productData = url)
    console.log(this.productData)
  }

  addcart(items: getData) {
    this.addData.push(items)
  }
}
