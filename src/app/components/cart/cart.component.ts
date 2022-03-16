import { Component, OnInit } from '@angular/core';
import { storeData } from 'src/app/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['productName', 'orderId', 'productId', 'availableQuantity'];
  getData:any = storeData;

  ngOnInit(): void {
  }

}
export interface getData {
  productId: string;
  position: number;
  availableQuantity: number;
  orderId: string;
}