import { Component, OnInit } from '@angular/core';
import { storeData } from 'src/app/store';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private url: ApiService) { }

  displayedColumns: string[] = ['productName', 'orderId', 'productId', 'availableQuantity'];
  getData: any = storeData;

  ngOnInit(): void {
  }
  submit() {
    {
      console.log(this.getData)
      this.getData.map((product: any) =>{
        this.url.placeorder(product).subscribe(res => {
          console.log(res)
        })
      })
      
    }
  }
}