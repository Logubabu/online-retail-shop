import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// export class productData{
//   productId:any;
//   productName:string;
//   availableQuantity:number;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  productData:any=[]
  // productData:{
  //   productId:any;
  //   productName:string;
  //   availableQuantity:number;
  // }

  ngOnInit(): void {
  }

  addProduct(insert: string,insert1:string) {
    if(insert!=="")
    this.productData.push({ id: this.productData.length,insert,insert1 })
    console.warn(insert,insert1)
  }

  onSubmit(form:NgForm):void{
    console.log(form.value)
  }
 
}
