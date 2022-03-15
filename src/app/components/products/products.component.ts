import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

//   log = 0;
//   showLog = false;

//   increment(){
//        this.showLog = true;
//        return this.log = this.log + 1;
//   }
//   decrement(){
//     this.showLog = true;
//     return this.log = this.log - 1;
// }

  constructor(private url: ApiService) { }
  productData: any = []

  ngOnInit(): void {
    this.url.getpro().subscribe(url => this.productData = url)
  
  }

}
