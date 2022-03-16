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
      this.url.create(this.getData.value).subscribe(res => {
        console.log(this.getData.value)
      })
    }
  }
}
export interface getData {
  productId: string;
  position: number;
  availableQuantity: number;
  orderId: string;
}