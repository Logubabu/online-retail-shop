import { Component, OnInit } from '@angular/core';
import { storeData } from 'src/app/store';
import { ApiService } from 'src/app/services/api.service';
import { getData, loadData } from 'src/app/data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private url: ApiService) { }

  displayedColumns: string[] = ['productName', 'orderId', 'productId', 'availableQuantity'];
  orderdata: getData[] = storeData;

  ngOnInit(): void {
    console.log(storeData)
  }
  submit() {
    {
      console.log(this.orderdata)
      this.orderdata.map((product: any) =>{
        this.url.placeorder(product).subscribe(res => {
          console.log(res)
        })
      })
      
    }
  }
}