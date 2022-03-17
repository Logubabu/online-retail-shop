import { Component, OnInit } from '@angular/core';
import { storeData } from 'src/app/store';
import { ApiService } from 'src/app/services/api.service';
import { getData, loadData } from 'src/app/data';
import { v4 as uuid4 } from 'uuid';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private url: ApiService) { }

  displayedColumns: string[] = ['productName', 'orderId', 'productId', 'availableQuantity'];
  orderdata: getData[] = storeData;
  ordercart: loadData={
  orderId: uuid4(),
  customerId: uuid4(),
  productId: "",
  quantity: 0,
}
  ngOnInit(): void {
   
  }
  submit() {
    {
      console.log(this.ordercart)
      this.orderdata.forEach(element => {
        this.ordercart.productId=element.productId;
        this.ordercart.quantity=element.availableQuantity;
        this.url.placeorder(this.ordercart).subscribe(res=>{
          console.log(res)
        })
      });
      // this.ordercart.map((product: any) =>{
      //   this.url.placeorder(product).subscribe(res => {
      //     console.log(res)
      //   })
      // })
      
    }
  }
}